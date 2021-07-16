import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <>
    <div className="Lesson-Panel">
      <div className="Lesson-Panel-left">
        <div className="category">{book.category}</div>
        <div className="title">{book.title}</div>
        <div className="author">Author Name</div>
        <div className="links">
          <div className="link comments">Comments</div>
          <div className="link remove">
            <input
              className="Remove"
              type="submit"
              onClick={() => handleRemoveBook(book)}
              value="Remove"
            />
          </div>
          <div className="link edit">Edit</div>
        </div>
      </div>

      <div className="Lesson-Panel-middle">
        <div className="progress-circle">
          <div className="circle" />
        </div>
        <div className="progress-info">
          <div className="progress-info-percentage">64%</div>
          <div className="progress-info-status">Completed</div>
        </div>
      </div>

      <div className="line" />

      <div className="Lesson-Panel-right">
        <div className="chapter">Current chapter</div>
        <div className="chapter-number">Chapter 17</div>
        <div className="chapter-progress-button">Update Progress</div>
      </div>
    </div>
  </>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
