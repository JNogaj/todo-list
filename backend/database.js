import { MongoClient } from 'mongodb';

export async function getMongoClient({
  host = 'localhost',
  port = 27017,
  user,
  password,
  database,
}) {
  const uri = `mongodb://${user}:${password}@${host}:${port}/admin`;
  const client = new MongoClient(uri);
  await client.connect();
  const databaseClient = client.db(database);
  return databaseClient;
}
