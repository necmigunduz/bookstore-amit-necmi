import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ bookId, title, category }) => (
  <>
    <td>{bookId}</td>
    <td>{title}</td>
    <td>{category}</td>
  </>
);

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
