// schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    title: String
    author: String
    description: String
    image: String
    link: String
  }

  type Query {
    searchBooks(searchTerm: String!): [Book]
    getSavedBooks: [Book]
  }

  type Mutation {
    saveBook(title: String!, author: String!, description: String!, image: String!, link: String!): Book
    removeBook(title: String!): Book
    loginUser(email: String!, password: String!): String
    signupUser(username: String!, email: String!, password: String!): String
  }
`;

module.exports = typeDefs;
