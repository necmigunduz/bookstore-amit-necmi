import { CREATE_BOOK, REMOVE_BOOK } from '../actions/booksActions';

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        bookId: Math.random(),
        title: action.payload.title,
        category: action.payload.category,
      };
    case REMOVE_BOOK:
      return state.filter((e) => e.id !== action.payload.bookId);
    default:
      return state;
  }
};

export default booksReducer;
