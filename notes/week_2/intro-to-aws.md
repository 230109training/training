# Introduction to AWS (Amazon Web Services)

Cloud Computing: a service model in which users can access and use shared computing resources, such as servers, storage, and applications, over the internet on a pay-as-you-go basis, rather than owning and maintaining them locally

AWS, or Amazon Web Services, is a collection of cloud computing services owned by Amazon. Amazon is the leader in cloud computing in terms of market-share and currently holds the lead in terms of the number of services it offers. Cloud computing is such an important and relatively recent development in the world of technology, and yet it has already become a very important and integral part of many companies' IT systems. Small startups all the way to large enterprises are able to leverage the power of cloud computing, oftentimes through AWS.

## Benefits of AWS
- Scalability: resources can be scaled out (more) or in (less) as needed, so that you only pay for what you really need to use
- Reliability: AWS's infrastructure is designed to be highly available and fault-tolerant
- Cost-effectiveness: Pay only for what you use, with no upfront costs or long-term commitments
- Global reach: AWS has a global infrastructure with multiple regions and availablility zones, making it easy to deploy and run applications worldwide
- Flexibility: AWS offers a wide range of services, including virtual computing (AWS EC2), storage (S3, EBS, database services, etc.), allowing you to build and run virtually any application or service
- Security: AWS provides a variety of security features and compliance to regulations to help protect your data and applications

## AWS Infrastructure
In order for cloud computing to be possible, AWS must manage all of the physical servers in their own datacenters. All of the servers exist in various datacenters around the world. It is important to understand the distribution of these datacenters in terms of **AWS regions** and **availability zones (AZ)**
- AWS Region
    - A geographic region where AWS has multiple data centers
        - ex. us-east-1 (Northern Virginia)
    - Each AWS region is isolated from other regions
        - Most resources that you create are specific to a particular region
            - ex. If I create a DynamoDB table, it belongs to a particular region, so if I switch to another region, I won't be able to see that table
            - Generally, you want to make sure to remember what region you created a resource in, so that you can delete the resource being used in the future
    - Each region has multiple availability zones (AZs)
- Availability Zone (AZ)
    - Physically separate locations within a region that are connected together via low latency links
    - Physically isolated, but not isolated in terms of connection
        - Each AZ has its own power, cooling, and networking
        - In case of a power outage or natural disaster in one AZ, other locations should be unaffected
    - AZs exist to help promote high availability and fault tolerance by protecting applications and data from a single point of failure
        - If one AZ goes down, resources can be "failed over" to another AZ
    - An AZ is basically one physical datacenter in a region

## Vertical v. Horizontal Scaling
- A major advantage of cloud computing is the ability to scale quickly based on the growth in the number of customers using the application
- Types of scaling
    - Vertical: Adding more power and resources to a single server (ex. adding more RAM, adding more CPU cores, etc.)
    - Horizontal: Adding more servers (ex. scaling from 1 server to 1000 servers)
- Horizontal scaling is virtually unlimited, while vertical scaling has an upper limit (constrained by physical limitations to what you can add to a single server)
- Horizontal scaling has challenges compared to virtual scaling in terms of how we design our infrastructure. With horizontal scaling, because we're making use of multiple servers, we need some way to distribute traffic out to different servers and deploy the application to all of those servers

# Identity and Access Management (IAM)
IAM is a global service that enables us to manage users, groups, roles, and the permissions that those users groups and roles have to the cloud resources
- IAM User: a person or application that interacts with AWS using credentials (username + password, OR access keys)
    - A user can have permissions directly assigned to them
    - ex. somebody who is logging into the AWS website to create DynamoDB tables
    - ex. a node.js app that needs to add, delete, and update items in a DynamoDB table
- IAM Group: a collection of IAM users. A user can belong to multiple groups as well
    - Permissions can be assigned to a group, and all users that belong to that group will have the same permissions
    - IAM groups are basically an easy way to assign the same permissions to many different users
- IAM Role: roles can be assumed by an AWS service
    - We can assign permissions to a Role
    - Examples of services that might utilize a role
        - EC2 instances
        - Lambda functions

From a practical perspective, we will create an IAM user for ourselves in order to access different services in the AWS console, and we will also create an IAM user for our Node.js application to be able to access DynamoDB.