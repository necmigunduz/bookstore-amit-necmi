import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ bookId, title, category }) => (
  <table>
    <tr>
      <th>BookId</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <tr>
      <Book bookId={bookId} title={title} category={category} />
    </tr>
  </table>
);

BooksList.propTypes = {
  bookId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default connect(BooksList);
