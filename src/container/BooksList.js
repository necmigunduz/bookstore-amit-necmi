import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const {
    books, removeBook, filterBook, filter1,
  } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    filterBook(filter);
  };

  return (
    <>
      <div>
        <CategoryFilter filterChange={handleFilterChange} />
        <div>
          {filter1}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>BookId</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            books.filter((book) => book.category === filter1 || filter1 === 'All' || filter1 === '').map((book) => (
              <Book
                book={book}
                key={book.bookId}
                handleRemoveBook={(bookId) => handleRemoveBook(bookId)}
                filter={filter1}
              />
            ))
          }
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
  filter1: PropTypes.string,
};

BooksList.defaultProps = {
  books: [],
  filter1: '',
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter1: state.filter.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
  filterBook: (filter) => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
