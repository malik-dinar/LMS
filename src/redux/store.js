import {configureStore} from '@reduxjs/toolkit'
import tutorDataReducer from './user-tutor/tutor'
import userDataReducer from './user-tutor/user'

import storage from 'redux-persist/lib/storage' 
import persistReducer from 'redux-persist/es/persistReducer'
import { combineReducers } from '@reduxjs/toolkit'


const persistConfig = {
    key: "root",
    version:1,
    storage
};

const reducer = combineReducers({
    tutorData : tutorDataReducer,
    userData : userDataReducer  
})

const persistedReducer= persistReducer(persistConfig, reducer)

export default configureStore({
    reducer: persistedReducer
})