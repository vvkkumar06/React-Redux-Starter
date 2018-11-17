import { combineReducers } from 'redux';
import booksReducer from './books';
import activeBook from './activeBook';

const rootReducer = combineReducers({
  books: booksReducer,
  activeBook: activeBook
});

export default rootReducer;