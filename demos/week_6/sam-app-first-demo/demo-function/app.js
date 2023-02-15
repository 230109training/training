exports.lambdaHandler = async (event, context) => {

    try {
        let response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'demo function!!!',
            })
        }

        return response
    } catch(err) {
        return err;
    }
    
};