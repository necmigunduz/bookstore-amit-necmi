import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const BooksForm = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    if (e.target.tagName === 'INPUT') {
      setTitle(e.target.value);
    } else if (e.target.tagName === 'SELECT') {
      const { text } = e.target.options[e.target.selectedIndex];
      setCategory(text);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookId = Math.random().toString();
    const book = {
      bookId,
      title,
      category,
    };
    props.createBook(book);
    setTitle('');
    setCategory('');
  };

  return (
    <form>
      <input type="text" onChange={(e) => handleChange(e)} value={title} />
      <select onChange={(e) => handleChange(e)} value={category}>
        {
            categories.map((e) => <option key={Math.random()} value={e.id}>{e}</option>)
          }
      </select>
      <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
