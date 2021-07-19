import * as actions from './booksActions';

export const createBook = (book) => (
  {
    type: actions.CREATE_BOOK,
    payload: book,
  }
);

export const removeBook = (book) => (
  {
    type: actions.REMOVE_BOOK,
    payload: book,
  }
);

export const changeFilter = (filter) => (
  {
    type: actions.CHANGE_FILTER,
    payload: filter,
  }
);
