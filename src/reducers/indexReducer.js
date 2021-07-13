import { combineReducers } from 'redux';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({ Books: booksReducer });
