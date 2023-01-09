# Email Status

This project implements the scenario that an email goes out via Mailgun (mailgun.com). Once it’s out, Mailgun sends various events back (open, clicked, etc). We have sent an email via Mailgun and now we expect those events sent to us via webhooks, hitting an API Gateway and then that information is proxied to a Lambda. The Lambda should do two things: save a copy of the raw webhook and publish a transformed version into SNS.

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Clone this repository to your local machine by running the `git clone https://github.com/SaedMushtaha/mail-events.git` command

make sure you are in the right project directory by running the command `cd my-new-service`

change the DB variable in the env file.

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.
### Using NPM

- Run `npm i` to install the project dependencies

### Using Yarn

- Run `yarn` to install the project dependencies

## Configurations

| :warning: WARNING                                                                           |
| :------------------------------------------------------------------------------------------ |
| It is important to change configuration settings before building, packaging and deployment. |

**This project by default deploys to `us-east-1` to change it, add --region [REGION_NAME] when building and deploying**

| :info: INFO                                                                              |
| :--------------------------------------------------------------------------------------- |
| The SNS service is deployed to `us-east-1`, change to this region to see cloudwatch logs |

Go to the `src/functions/db.ts` file to change Mongodb database configuration parameters to deploy with your own database

## Storing Secrets and Keys

For security, this guide will help to store secrets using Parameter Store provided by Systems Manager in AWS.

These keys need to be stored on AWS as the Lambda functions will need them to run.

To store a key, make sure you are authenticated via the AWS CLI and run the following command:

```bash
aws ssm put-parameter --name NAME_OF_SECRET \
                      --value 'my super safe secret' \
                      --type SecureString
```

Below are the keys needed to run these lambda functions:

AccountId="xxxxxxxxxxx" (This is your AWS account ID)

MAILGUN_API_KEY="XXXXXXXXXXXXXXX" (API key from Mailgun)

MAILGUN_DOMAIN="mailgun.XXXXXXXX.com" (Domain on mailgun)

## Deployment

- Connect to AWS from AWS CLI from your teminal by using the **aws configure** command.
- Run `npx sls package --package dist ` to build from typescript to javascript files and package it in to the dist folder with cloudformation configuration files
- Run `npx sls deploy --package dist` to deploy this stack to AWS

> NOTE:: This project by default deploys to `us-east-1` to build and deploy to othe regions, add --region [REGION_NAME] flag when building and deploying
> **Alternatively**: You can also install the serverless package globally by runing `npm install -g serverless`
> and then, run the `npm run build-deploy` command to both build and deploy to AWS
## Testing the service

This template contains a two lambda functions triggered by an HTTP request made
on the provisioned API Gateway REST API `/sendEmail` and `/webhook` routes with `POST`
method. The request body must be provided as `application/json`. The body
structure is tested by API Gateway against `src/functions/sendEmail/schema.ts`
and `src/functions/webhook/schema.ts`
JSON-Schema definitions: must contain the `from, to, subject, html` and
`event-data, signature` properties respectively.

- requesting any other path than `/sendEmail` or `/webhook` with any other method than `POST` will result in API Gateway returning a `404` HTTP error code
- sending a `POST` request to `/sendEmail` or `/webhook` with a payload **not**
  containing the reuqired string properties will result in API Gateway
  returning a `400` HTTP error code
- sending a `POST` request to `/sendEmail` or `/webhook` with a payload
  containing the required string properteis will result in API Gateway
  returning a `200` HTTP status code.

### Locally

In order to test the sendEmail and webhook functions locally, run the following command:

- `npx sls invoke local -f sendEmail --path src/functions/sendEmail/mock.json` if you're using NPM
- `yarn sls invoke local -f sendEmail --path src/functions/sendEmail/mock.json`
  if you're using Yarn

- `npx sls invoke local -f webhook --path src/functions/webhook/mock.json` if you're using NPM
- `yarn sls invoke local -f webhook --path src/functions/webhook/mock.json`
  if you're using Yarn

Check the [sls invoke local command documentation](https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/) for more information.

### Remotely

Two API endpoints will be generated after the deployment, found after running `npx sls deploy` command. Output should be in the format

- https://ApiEndpoint/dev/sendEmail - This is the endpoint for sending email.

- https://ApiEndpoint/dev/webhook - This webhook should be configured on your mailgun account to send events (e.g opened, delivered, click e.t.c)

Copy and replace your `url` - found in Serverless `deploy` command output - and `from, to, subject, html` parameters in the following `curl` command in your terminal or in Postman to test your newly deployed application.

```
curl --location --request POST 'https://ApiEndpoint/dev/sendEmail' \
--header 'Content-Type: application/json' \
--data-raw '{
    "to": ["abc@xyz.com"],
    "from": "you@your-domain.com", # Sender's email from your mailgun account
    "subject": "Email Service"
    "html":"This is a test email from email service" # Body of the email
}'
```

> :warning: As is, this template, once deployed, opens a **public** endpoint within your AWS account resources. Anybody with the URL can actively execute the API Gateway endpoint and the corresponding lambda.
## Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for the lambda functions
- `libs` - containing shared code base between lambdas

```
.
├── src
│   ├── functions               # Lambda configuration and source code folder
│   │   ├── sendEmail
│   │   │   ├── handler.ts      # `sendEmail` lambda source code
│   │   │   ├── index.ts        # `sendEmail` lambda Serverless configuration
│   │   │   ├── mock.json       # `sendEmail` lambda input parameter, if any, for local invocation
│   │   │   └── schema.ts       # `sendEmail` lambda input event JSON-Schema
│   │   ├── webhook
│   │   │   ├── handler.ts      # `webhook` lambda source code
│   │   │   ├── index.ts        # `webhook` lambda Serverless configuration
│   │   │   ├── mock.json       # `webhook` lambda input parameter, if any, for local invocation
│   │   │   └── schema.ts       # `webhook` lambda input event JSON-Schema
│   │   │
│   │   ├── keyStoreModule.ts   # This module connects to stored secrets and keys using Parameter Store provided by Systems Manager in AWS.
│   │   ├── db.ts               # mongodb database connection abstactions.
│   │   └── index.ts            # Import/export of all lambda configurations
│   │
│   └── libs                    # Lambda shared code
│       └── apiGateway.ts       # API Gateway specific helpers
│       └── handlerResolver.ts  # Sharable library for resolving lambda handlers
│       └── lambda.ts           # Lambda middleware
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── tsconfig.paths.json         # Typescript paths
└── webpack.config.js           # Webpack configuration
```

### 3rd party libraries

- [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts) - uses JSON-Schema definitions used by API Gateway for HTTP request validation to statically generate TypeScript types in your lambda's handler code base
- [middy](https://github.com/middyjs/middy) - middleware engine for Node.Js lambda. This template uses [http-json-body-parser](https://github.com/middyjs/middy/tree/master/packages/http-json-body-parser) to convert API Gateway `event.body` property, originally passed as a stringified JSON, to its corresponding parsed object
- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file