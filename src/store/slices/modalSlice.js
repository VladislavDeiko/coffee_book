import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    activeAddModal: false,
    modalOption: 'addBook'
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalOpen: (state) => {
            state.activeAddModal = true;
        },
        modalClose: (state) => {
            state.activeAddModal = false;
        },
        modalOptionChange: (state, action) => {
            // options: addBook or editBook 
            state.modalOption = action.payload
        }
    }
})

const {actions, reducer} = modalSlice;

export default reducer

export const {
    modalOpen,
    modalClose,
    modalOptionChange
} = actions