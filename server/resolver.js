//resolvers.js
const { booksDatabase } = require('./fakeDtabase'); // You can use a real database here

const resolvers = {
  Query: {
    searchBooks: (_, { searchTerm }) => {
      // Implement your book search logic here (e.g., using Google Books API)
      // Return an array of books matching the search term
      return [];
    },
    getSavedBooks: (_, __, { user }) => {
      if (!user) {
        throw new Error('Authentication required');
      }
      // Implement your logic to fetch saved books for the authenticated user
      return booksDatabase.getSavedBooks(user.id);
    },
  },
  Mutation: {
    saveBook: (_, { title, author, description, image, link }, { user }) => {
      if (!user) {
        throw new Error('Authentication required');
      }
      // Implement your logic to save a book to the authenticated user's account
      const book = { title, author, description, image, link };
      booksDatabase.saveBook(user.id, book);
      return book;
    },
    removeBook: (_, { title }, { user }) => {
      if (!user) {
        throw new Error('Authentication required');
      }
      // Implement your logic to remove a book from the authenticated user's account
      const removedBook = booksDatabase.removeBook(user.id, title);
      return removedBook;
    },
    loginUser: (_, { email, password }) => {
      // Implement your logic for user login and JWT generation
      // Return the JWT token for the authenticated user
      const token = 'your_generated_jwt_token';
      return token;
    },
    signupUser: (_, { username, email, password }) => {
      // Implement your logic for user signup and JWT generation
      // Return the JWT token for the new user
      const token = 'your_generated_jwt_token';
      return token;
    },
  },
};

module.exports = resolvers;
