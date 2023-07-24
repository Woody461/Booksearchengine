// server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../../schema');
const resolvers = require('./resolvers');
const authMiddleware = require('../../server/auth');

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const user = authMiddleware(req);
    return { user };
  },
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
