// fakeDatabase.js
// A mock implementation of a database
const fakeBooksDatabase = {
    users: {},
    saveBook(userId, book) {
      if (!this.users[userId]) {
        this.users[userId] = [];
      }
      this.users[userId].push(book);
    },
    removeBook(userId, title) {
      const userBooks = this.users[userId];
      if (!userBooks) {
        return null;
      }
      const index = userBooks.findIndex((book) => book.title === title);
      if (index !== -1) {
        return userBooks.splice(index, 1)[0];
      }
      return null;
    },
    getSavedBooks(userId) {
      return this.users[userId] || [];
    },
  };
  
  module.exports = {
    booksDatabase: fakeBooksDatabase,
  };
  