export default `
  type Task {
    _id: String!,
    title: String!,
    responsible: String!,
    description: String!,
    priority: String!,
  }

  type Query {
    allTasks: [Task!]!,
  }

  type Mutation {
    createTask(title: String!, responsible: String!, description: String!, priority: String!): Task!,
    deleteTask(_id: String!): Task!
  }

`;
