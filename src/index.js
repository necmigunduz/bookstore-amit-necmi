import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/indexReducer';
import './index.css';
import App from './App';

const initialState = {
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

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
