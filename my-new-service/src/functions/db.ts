"use strict";

// Import dependency.
const { MongoClient } = require("mongodb");
require('dotenv').config();
/**
 * @NOTE : This MongoDB cluster is for testing purposes.
 * You can either change these values or use this instance for testing,
 * In production, these @credentials and @keys will be stored in a key management system
 * @TODO : Fill in your mongoDB credentials
 */
const mongoClusterName: string = process.env.MONGOCLUSTERNAME;
const mongoUser: string = process.env.MONGOUSER;
const mongoDbName: string = process.env.MONGODBNAME;
const mongoPass: string = process.env.MONGOPASS;

// Connection string to the database
const uri: string = `mongodb+srv://${mongoUser}:${mongoPass}@${mongoClusterName}.49taf.mongodb.net/${mongoDbName}?retryWrites=true&w=majority`;

// Validate that the database connection string has been configured.
if (!uri) {
  throw new Error(
    "The MONGODB_URI environment variable must be configured with the connection string " +
      "to the database."
  );
}

// Cached connection promise
let cachedPromise = null;

// Function for connecting to MongoDB, returning a new or cached database connection
module.exports.connectToDatabase = async function connectToDatabase() {
  if (!cachedPromise) {
    // If no connection promise is cached, create a new one. We cache the promise instead
    // of the connection itself to prevent race conditions where connect is called more than
    // once. The promise will resolve only once.
    cachedPromise = MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  // await on the promise. This resolves only once.
  const client = await cachedPromise;

  return client;
};