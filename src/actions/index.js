import * as actions from './booksActions';

export const createBook = (bookId, title, category) => (
  {
    type: actions.CREATE_BOOK,
    payload: {
      bookId,
      title,
      category,
    },
  }
);

export const removeBook = (bookId) => (
  {
    type: actions.REMOVE_BOOK,
    payload: {
      bookId,
    },
  }
);
