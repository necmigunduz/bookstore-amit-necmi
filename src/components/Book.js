import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ bookId, title, category }, handleRemoveBook) => (
  <>
    <td>{bookId}</td>
    <td>{title}</td>
    <td>{category}</td>
    <button type="submit" onClick={handleRemoveBook(bookId)}>Remove Book</button>
  </>
);

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func,
};

export default Book;
