import { MongoClient, Db } from 'mongodb';

import config from './config';

let db: Db;

const mongoConnect = (callback: () => void) => {
  MongoClient.connect(config.MONGODB_CONNECTION_STRING)
    .then((client) => {
      console.log('Connected to MongoDB.');
      db = client.db();
      callback();
    })
    .catch((err) => console.log(err));
};

const getDb = () => {
  if (db) {
    return db;
  }
  throw 'No database found.';
};

export default { mongoConnect, getDb };
