import {combineReducers, configureStore} from '@reduxjs/toolkit'
import UsersSlice from "./UsersSlice";

const rootReducer = combineReducers({
    userList: UsersSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})