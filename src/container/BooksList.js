import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = (props) => {
  const { books, removeBook } = props;
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  return (
    <>
      <tbody>
        {
        books.map((book) => (
          <Book
            book={book}
            key={book.bookId}
            handleRemoveBook={(bookId) => handleRemoveBook(bookId)}
          />
        ))
         }
      </tbody>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
