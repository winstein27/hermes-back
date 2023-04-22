import { MongoClient } from 'mongodb';

import config from './config';

const mongoConnect = (callback: (client: MongoClient) => void) => {
  MongoClient.connect(config.MONGODB_CONNECTION_STRING)
    .then((client) => {
      console.log('Connected to MongoDB.');
      callback(client);
    })
    .catch((err) => console.log(err));
};

export default mongoConnect;
