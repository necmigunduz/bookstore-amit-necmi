import React, { useState } from 'react';
import { createBook } from '../actions';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [book, setBook] = useState({ title: '', category: '' });

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      book.title = e.target.value;
    }
    if (e.target.name === 'category') {
      book.category = e.target.value;
    }

    setBook({
      title: book.title,
      category: book.category,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, category } = book;
    const bookId = Math.random();
    createBook(bookId, title, category);
    setBook({
      title: '',
      category: '',
    });
  };

  return (
    <form>
      <input type="text" onChange={(e) => handleChange(e)} />
      <select>
        {
            categories.map((e) => <option key={Math.random()} value={e}>{e}</option>)
          }
      </select>
      <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  );
};

export default BooksForm;
