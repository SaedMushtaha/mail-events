import "source-map-support/register";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";

const { getMailgunAPIKey, getMailgunDomain } = require("../keyStoreModule");

const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

/**
 * Lambda that sends an email via mailgun
 * It uses @schema to validate the event object passed through the function
 * @param event
 * @returns
 */


const sendEmail: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  
  // Get the API key and domain from the ssm parameter store
  const apiKey: string = await getMailgunAPIKey();
  const apiDomain: string = await getMailgunDomain();

  // Create a new Mailgun client with the API key
  const mg = mailgun.client({
    username: "api",
    key: apiKey,
  });

  // Send the email using the Mailgun client and the event object as the message
  return mg.messages
    .create(apiDomain, event.body)
    .then((msg) => {
      console.log("Email Sent");
      console.log(msg);
      return formatJSONResponse._200(msg);
    })
    .catch((err) => {
      console.log("Email not Sent");
      console.log(err.message);
      return formatJSONResponse._400(err);
    });
};

export const main = middyfy(sendEmail);