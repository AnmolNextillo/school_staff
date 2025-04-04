import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './LoginSlice';
import getTestsReducer from './GetTestsSlice';
import logoutReducer from './LogoutSlice';
import getProfileReducer from './GetProfileSlice';
import getTestDetailReducer from './GetTestDetailSlice';

export const store = configureStore({
    reducer:{
        loginReducer:loginReducer,
        getTestsReducer: getTestsReducer,
        logoutReducer: logoutReducer,
        getProfileReducer: getProfileReducer,
        getTestDetailReducer: getTestDetailReducer,
    }
})