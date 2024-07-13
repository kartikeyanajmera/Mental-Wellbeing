// src/mongo.js
import { MongoClient } from 'mongodb';

const uri = 'YOUR_MONGODB_CONNECTION_STRING';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connectDb = async () => {
  if (!client.isConnected()) await client.connect();
  return client.db('your-database-name');
};

export { connectDb };
