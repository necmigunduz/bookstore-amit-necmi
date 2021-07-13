import { action } from "commander";
import { CREATE_BOOK, REMOVE_BOOK } from "../actions";

const initialState = {
    bookId: 0,
    title: 'Book of My Life ',
    category: 'Autobiography'
}

const booksReducer  = (state = initialState, action) => {
    switch(action.type){
        case CREATE_BOOK:
            return {
                ...state,
                {
                    bookId: action.payload.bookId += 1, 
                    title: action.payload.title, 
                    category: action.payload.category
                }
            }
        case REMOVE_BOOK:
            return state.filter((e) => e.id != action.payload.bookId)
        default: return state
    }
}