import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

export default {
  MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING || '',
};
