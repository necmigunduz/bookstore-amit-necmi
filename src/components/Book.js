import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <>
    <tr>
      <td>{book.bookId}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="submit" onClick={() => handleRemoveBook(book)}>Remove Book</button></td>
    </tr>
  </>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
