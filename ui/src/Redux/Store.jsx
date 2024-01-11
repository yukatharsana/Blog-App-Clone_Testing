import {Tuple, configureStore } from '@reduxjs/toolkit'
import  {thunk}  from 'redux-thunk';
import logger from 'redux-logger'
import userSlice  from './Slice/UserSlice';
import postSlice from './Slice/PostSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        post:postSlice
    },
    middleware:()=>new Tuple(thunk,logger)

}
);
