import { createSlice } from "@reduxjs/toolkit";
import {booksData} from '../../booksData'


const initialState = {
    books: [...booksData],
    filterBooks: [],
    searchBooks: "",
    filter: "",
    sort: ""
}

const booksSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        bookAdd: (state, action) => {
            state.books = [...state.books, action.payload]
            state.filterBooks = [...state.filterBooks, action.payload]
            
        },
        bookRemove: (state,action) => {
            state.books = state.books.filter(item => item.id !== action.payload)
            state.filterBooks = state.filterBooks.filter(item => item.id !== action.payload)

        },
        bookSearch: (state, action) => {
            state.searchBooks = action.payload;
            state.filterBooks = state.books
                .filter(item => {
                    if (state.filter) {
                        if (action.payload) {
                            return item.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()) && item.status === state.filter
                        } else {
                            return item.status === state.filter
                        }
                    } else {
                        return item.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
                    }
                })
                .sort((a,b) => {
                    if (state.sort === 'down') {
                        return a.date < b.date ? 1 : -1
                    } else if (state.sort === 'up') {
                        return a.date > b.date ? 1 : -1
                    }   
                })

        },
        booksSortDate: (state, action) => {
            state.sort = action.payload
            state.filterBooks = state.filterBooks.sort((a,b) => {
                if (action.payload === '' || action.payload === 'down') {
                    return a.date < b.date ? 1 : -1
                } else if (action.payload === 'up') {
                    return a.date > b.date ? 1 : -1
                }   
            })
        },
        booksFilter: (state, action) => {
            state.filter = action.payload
            state.filterBooks = state.books
                .filter(book => {
                    if (!action.payload) {
                        return book
                    }
                    return book.status === action.payload
                })
        }
    }
})

const {actions, reducer} = booksSlice;

export default reducer

export const {
    bookAdd,
    bookRemove,
    bookSearch,
    booksSortDate,
    booksFilter
} = actions