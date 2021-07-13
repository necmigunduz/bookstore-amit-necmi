import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ bookId, title, category }) => (
  <>
    <tr>
      <th>BookId</th>
      <th>Title</th>
      <th>Category</th>
      <Book bookId={bookId} title={title} category={category} />
    </tr>
  </>
);

BooksList.propTypes = {
  bookId: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

BooksList.defaultProps = {
  bookId: Math.random(),
  title: '',
  category: '',
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
