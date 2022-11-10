import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    list: [],
    sortBy: null,
    searchBy: null,
    page: 1,
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
            state.list = state.list.filter(item => item.id !== action.payload)
            return state
        },
        setSearchStringAction: (state, action) => {
            state.sortBy = action.payload
            return state
        },

    },
})

export const { getList, deleteUserAction, setSearchStringAction } = UsersSlice.actions

export default UsersSlice.reducer