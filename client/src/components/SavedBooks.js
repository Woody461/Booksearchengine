// client/src/components/SavedBooks.js
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);

  const [removeBook] = useMutation(REMOVE_BOOK);

  const handleDeleteBook = async (bookId) => {
    try {
      await removeBook({
        variables: { bookId },
      });
      // You can handle the successful book removal logic here
      console.log('Book removed successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Saved Books</h2>
      {data && data.me && data.me.savedBooks.length > 0 ? (
        <ul>
          {data.me.savedBooks.map((book) => (
            <li key={book.bookId}>
              <h3>{book.title}</h3>
              <p>By: {book.authors.join(', ')}</p>
              <p>{book.description}</p>
              <button onClick={() => handleDeleteBook(book.bookId)}>Remove Book</button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No saved books found.</div>
      )}
    </div>
  );
};

export default SavedBooks;

