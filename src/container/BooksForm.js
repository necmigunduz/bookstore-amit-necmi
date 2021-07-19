import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const BooksForm = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

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

    const titleText = document.getElementsByName('BookTitle')[0];
    if (/^ *$/.test(title)) {
      titleText.placeholder = 'Book name can\'t be blank';
      titleText.style.border = '1px solid red';
      return;
    }
    if (title) {
      titleText.placeholder = 'Book Title';
      titleText.style.border = 'none';
    }

    const book = {
      bookId,
      title,
      category,
    };
    props.createBook(book);
    setTitle('');
    setCategory('Action');
  };

  return (

    <div className="form-container">
      <h2>Add New Book</h2>
      <form>
        <input type="text" name="BookTitle" onChange={(e) => handleChange(e)} value={title} placeholder="Book Title" />
        <select onChange={(e) => handleChange(e)} value={category}>
          {
              categories.map((e) => <option key={Math.random()} value={e.id}>{e}</option>)
          }
        </select>
        <button type="submit" onClick={(e) => handleSubmit(e)}>Add Book</button>
      </form>
    </div>
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
