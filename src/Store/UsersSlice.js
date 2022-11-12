import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
    sortBy: null,
    searchBy: null,
    currentPage: 1,
    isLoading: false,
    isPopupActive: false,
    deleteUser: null,
    failFetch: false,
}

export const UsersSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        getList: (state, action) => {
            state.list = action.payload
            return state
        },
        setFailFetchAction: (state) => {
            state.failFetch = true
            state.isLoading = false
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
            if (state.sortBy === action.payload && !!state.sortBy) {
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
        incrementPageAction: (state, action) => {
            if (state.currentPage < action.payload){
                ++state.currentPage
            }
            return state
        },
        decrementPageAction: (state) => {
            if (state.currentPage !== 1) {
                --state.currentPage
            }
            return state
        },
        setPageAction: (state, action) => {
            console.log(action.payload)
            state.currentPage = action.payload
            return state
        },
        setIsPopupActiveAction: (state, action) => {
            state.deleteUser = action.payload.userID
            state.isPopupActive = action.payload.st
            return state
        },

    },
})

export const { getList,
    deleteUserAction,
    setSearchStringAction,
    setSortTypeAction,
    load,
    setIsPopupActiveAction,
    incrementPageAction,
    decrementPageAction,
    setPageAction,
    setFailFetchAction } = UsersSlice.actions

export default UsersSlice.reducer