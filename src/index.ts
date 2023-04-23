import { startStandaloneServer } from '@apollo/server/standalone';

import graphqlServer from './util/graphql';
import db from './util/database';

db.mongoConnect(() => {
  startStandaloneServer(graphqlServer, {
    listen: { port: 4000 },
  })
    .then((result) => {
      console.log(`🚀 Server ready at: ${result.url}`);
    })
    .catch((err) => console.log(err));
});
