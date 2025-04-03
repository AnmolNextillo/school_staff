import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './LoginSlice';
import getTestsReducer from './GetTestsSlice';

export const store = configureStore({
    reducer:{
        loginReducer:loginReducer,
        getTestsReducer: getTestsReducer,
    }
})