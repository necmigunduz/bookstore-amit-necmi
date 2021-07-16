import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <>
    <tr>
      <div className="Lesson-Panel">
        <div className="column">
          <td className="School-of p-20">{book.category}</td>
          <td className="title p-20">{book.title}</td>
          <td className="Suzanne-Collins p-20">Author</td>
        </div>
        <div>
          <td><span className="Comments" type="submit">Comments</span></td>
          <td><input className="Remove" type="submit" onClick={() => handleRemoveBook(book)} value="Remove" /></td>
          <td><span className="Edit" type="submit">Edit</span></td>
        </div>
      </div>
    </tr>
  </>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
