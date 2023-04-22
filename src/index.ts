import { startStandaloneServer } from '@apollo/server/standalone';

import graphqlServer from './util/graphql';
import mongoConnect from './util/database';

mongoConnect((client) => {
  startStandaloneServer(graphqlServer, {
    listen: { port: 4000 },
  })
    .then((result) => {
      console.log(`🚀 Server ready at: ${result.url}`);
    })
    .catch((err) => console.log(err));
});
