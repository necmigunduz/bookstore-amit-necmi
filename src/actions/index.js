import * as actions from './booksActions';

const createBook = (book) => (
    {
        type: actions.CREATE_BOOK,
        payload: {
            title,
            category
        }
    }
)
    

const removeBook = (book) => (
    {
        type: actions.REMOVE_BOOK,
        payload: {
            bookId
        }
)