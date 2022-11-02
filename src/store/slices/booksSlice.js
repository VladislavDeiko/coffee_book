import { createSlice } from "@reduxjs/toolkit";
import {booksData} from '../../booksData'


const initialState = {
    books: [...booksData],
    filterBooks: [],
    searchBooks: ""
}

const booksSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        bookAdd: (state, action) => {
            state.books = [...state.books, action.payload]
            state.filterBooks = state.books.filter(item => {
                if (action.payload) {
                    return item.title.toLocaleLowerCase().includes(state.searchBooks.toLocaleLowerCase())
                } else {
                    return item
                } 
            }) 
        },
        bookRemove: (state,action) => {
            state.books = state.books.filter(item => item.id !== action.payload.id)
        },
        bookSearch: (state, action) => {
            state.searchBooks = action.payload;
            state.filterBooks = state.books.filter(item => {
                if (action.payload) {
                    return item.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
                } else {
                    return item
                }
            }) 
        },
        booksSortDate: (state, action) => {
            state.filterBooks = state.filterBooks.sort((a,b) => {
                if (action.payload === '' || action.payload === 'down') {
                    return a.date < b.date ? 1 : -1
                } else if (action.payload === 'up') {
                    return a.date > b.date ? 1 : -1
                }   
            })
        },


    }
})

const {actions, reducer} = booksSlice;

export default reducer

export const {
    bookAdd,
    bookRemove,
    bookSearch,
    booksSortDate
} = actions