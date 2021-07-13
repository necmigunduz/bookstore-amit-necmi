import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);

const initialState = [
  {
    bookId: Math.random(3),
    title: 'Adam\'s Life',
    category: 'Biography',
  },
  {
    bookId: Math.random(3),
    title: 'Football Heroes',
    category: 'Sports',
  },
  {
    bookId: Math.random(3),
    title: 'Cricket History in India',
    category: 'History',
  },
];

const store = createStore();
