import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './LoginSlice';
import getTestsReducer from './GetTestsSlice';
import logoutReducer from './LogoutSlice';
import getProfileReducer from './GetProfileSlice';
import getTestDetailReducer from './GetTestDetailSlice';
import addTestReducer from './AddTestSlice';
import getSubjectReducer from './GetSujectListSlice';
import getClassReducer from './GetClassListSlice';
import addAnnouncementReducer from './AddAnnouncementSlice';
import announcementListReducer from './GetAnnouncementListSlice';
import getAnnouncementDetailReducer from './GetAnnouncementDetailSlice';
import uploadFileReducer from './uploadFile';

export const store = configureStore({
    reducer:{
        loginReducer:loginReducer,
        getTestsReducer: getTestsReducer,
        logoutReducer: logoutReducer,
        getProfileReducer: getProfileReducer,
        getTestDetailReducer: getTestDetailReducer,
        addTestReducer: addTestReducer,
        getSubjectReducer: getSubjectReducer,
        getClassReducer: getClassReducer,
        addAnnouncementReducer: addAnnouncementReducer,
        announcementListReducer: announcementListReducer,
        getAnnouncementDetailReducer: getAnnouncementDetailReducer,
        uploadFileReducer: uploadFileReducer,
    }
})