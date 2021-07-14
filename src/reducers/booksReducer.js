import { CREATE_BOOK, REMOVE_BOOK } from '../actions/booksActions';

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((e) => e !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
