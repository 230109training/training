// CommonJS import style (Original Node.js import syntax)
const AWS = require('aws-sdk');
const uuid = require('uuid');
const { fromBuffer } = require('file-type-cjs');

exports.handler = async (event) => {
    const bodyObject = JSON.parse(event.body);

    const caption = bodyObject.caption;
    const base64String = bodyObject.image;

    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
    const imageBuffer = Buffer.from(base64Data, 'base64');

    // Object de-structuring
    const { ext } = await fromBuffer(imageBuffer);

    const postId = uuid.v4();

    const documentClient = new AWS.DynamoDB.DocumentClient();
    await documentClient.put({
        TableName: process.env.POSTS_TABLE_NAME,
        Item: {
            "post_id": postId,
            "caption": caption,
            "extension": ext
        }
    }).promise();

    const s3Client = new AWS.S3();
    
    await s3Client.putObject({
        Bucket: process.env.POSTS_BUCKET_NAME,
        Key: `${postId}.${ext}`,
        Body: imageBuffer
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({
            "message": "Hello world!"
        })
    }
}