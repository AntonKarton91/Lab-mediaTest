import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    list: [],
    sortBy: null,
    searchBy: null,
    page: 1,
    isLoading: false,
    isPopupActive: false,
    deleteUser: null,
}

export const UsersSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        getList: (state, action) => {
            state.list = action.payload
            return state
        },
        deleteUserAction: (state, action) => {
            state.list = state.list.filter(item => item.id !== state.deleteUser)
            state.isPopupActive = false
            state.deleteUser = null
            return state
        },
        setSearchStringAction: (state, action) => {
            state.searchBy = action.payload
            return state
        },
        setSortTypeAction: (state, action) => {
            if (state.sortBy === action.payload) {
                state.sortBy = action.payload + '-'
                return state
            }
            state.sortBy = action.payload
            return state
        },
        load: (state, action) => {
            state.isLoading = action.payload
            return state
        },
        setIsPopupActiveAction: (state, action) => {
            state.deleteUser = action.payload.userID
            state.isPopupActive = action.payload.st
            return state
        },

    },
})

export const { getList, deleteUserAction, setSearchStringAction, setSortTypeAction, load, setIsPopupActiveAction } = UsersSlice.actions

export default UsersSlice.reducer