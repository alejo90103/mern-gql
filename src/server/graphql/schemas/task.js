// GraphQL Schema
import { makeExecutableSchema } from 'graphql-tools';

// Schema Models
import typeDefSchemaTask from '../../schemas/task';

// Resolvers Models
import resolversModelTask from '../../resolvers/task';

const graphqlSchemaTask = makeExecutableSchema({
  typeDefs: typeDefSchemaTask,
  resolvers: resolversModelTask
});

export default graphqlSchemaTask;
