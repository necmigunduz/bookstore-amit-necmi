import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <>
    <tr>
      <div className="header Lesson-Panel">
        <div>
          <div>
            <div className="column">
              <td className="School-of p-20">{book.category}</td>
              <td className="title p-20">{book.title}</td>
              <td className="Suzanne-Collins p-20">Author</td>
            </div>
            <div>
              <td>
                <span className="Comments" type="submit">
                  Comments
                </span>
              </td>
              <td>
                <input
                  className="Remove"
                  type="submit"
                  onClick={() => handleRemoveBook(book)}
                  value="Remove"
                />
              </td>
              <td>
                <span className="Edit" type="submit">
                  Edit
                </span>
              </td>
            </div>
          </div>
        </div>
        <div className="progress blue">
          <span className="progress-left">
            <span className="progress-bar" />
          </span>
          <span className="progress-right">
            <span className="progress-bar" />
          </span>
        </div>
        <div>
          <div>
            <div className="Percent-Complete">64%</div>
            <div className="Completed">completed</div>
          </div>
        </div>
        <div className="header f-column">
          <span className="Current-Chapter">Current Chapter</span>
          <span className="Current-Lesson">Chapter 17</span>
          <div className="rect-update">
            <span className="Update-progress">update progress</span>
          </div>
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
