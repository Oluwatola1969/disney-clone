import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import userReducer from '../features/user/userslice'

export default configureStore({
    reducer: {
        user:userReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})