import { configureStore } from "@reduxjs/toolkit"
import modal from './slices/modalSlice'
import books from './slices/booksSlice'

const store = configureStore({
    reducer: {modal,books}
})

export default store