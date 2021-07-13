import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <input type="text" />
      <select>
        {
            categories.each((e) => <option>{e}</option>)
          }
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
