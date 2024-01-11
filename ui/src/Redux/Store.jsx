import {configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';
import logger from 'redux-logger'
import userSlice  from './UserSlice';

export const store = configureStore({
    reducer: {
        user:userSlice
    },
    middleware:[logger,thunk]
}
);
