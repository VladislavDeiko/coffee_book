import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    activeAddModal: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalAddOpen: (state) => {
            state.activeAddModal = true;
        },
        modalAddClose: (state) => {
            state.activeAddModal = false;
        }
    }
})

const {actions, reducer} = modalSlice;

export default reducer

export const {
    modalAddOpen,
    modalAddClose
} = actions