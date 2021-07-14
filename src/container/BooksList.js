import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ bookId, title, category }) => {
  const handleRemoveBook = (bookId) => {
    removeBook(bookId);
  };
  return (
    <>
      <tr>
        <th>BookId</th>
        <th>Title</th>
        <th>Category</th>
        { books.map((e) => <Book book={e} key={e.bookId} handleRemoveBook={handleRemoveBook} />)}
      </tr>
    </>
  );
};

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

const mapDispatchToProps = (dispatch) => ({
  removeBook: (bookId) => {
    dispatch(removeBook(bookId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
