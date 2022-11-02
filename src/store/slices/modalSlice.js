import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    activeModal: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalOpen: (state) => {
            state.activeModal = true;
        },
        modalClose: (state) => {
            state.activeModal = false;
        }
    }
})

const {actions, reducer} = modalSlice;

export default reducer

export const {
    modalOpen,
    modalClose
} = actions