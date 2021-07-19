import { CHANGE_FILTER } from '../actions/booksActions';

export const initialState = {
  books: [{
    bookId: Math.random().toString(),
    title: 'Adam\'s Life',
    category: 'Biography',
  },
  {
    bookId: Math.random().toString(),
    title: 'Football Heroes',
    category: 'Sports',
  },
  {
    bookId: Math.random().toString(),
    title: 'Cricket History in India',
    category: 'History',
  }],
};

export const filter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { filter: action.payload };
    default:
      return state;
  }
};
