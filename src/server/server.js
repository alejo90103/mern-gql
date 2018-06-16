import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';
import config from './config';
import mongoose from 'mongoose';

// initialized server
const server = express();

// setting
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// database connection
mongoose.connect(config.mongodb, (err, res) => {
  if (err) {
    return console.log(`Connection database error: ${err}`);
  } else {
    // middleware
    server.use(webpackDevMiddleware(webpack(webpackConfig)));

    // start server
    server.listen(config.port, () => {
      console.log(`🚀🚀🚀🚀 Server running on port: ${config.port}`);
    });
  }
});

// GraphQL and GraphIQL
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';

// MongoDB Models
import Task from './models/task';

// GraphQL Schema Task
import graphqlSchemaTask from './graphql/schemas/task';

// Routes
server.use('/graphql', express.json(), graphqlExpress({
  schema: graphqlSchemaTask,
  context: {
    Task
  }
}));

server.use('/graphiql', express.json(), graphiqlExpress({
  endpointURL: 'graphql'
}));
