import { readFileSync } from 'fs';
import { resolve } from 'path';

import { ApolloServer } from '@apollo/server';

import { resolvers } from '../resolvers';

type ApolloContext = {};

const GRAPHQL_SCHEMA_PATH = resolve(__dirname, '../schema.graphql');

const typeDefs = readFileSync(GRAPHQL_SCHEMA_PATH, { encoding: 'utf-8' });

const server = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
});

export default server;
