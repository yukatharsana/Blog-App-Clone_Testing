import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const userAdepter = createEntityAdapter({
    selectId:(user)=>user.userid
})
export const userSlice = createSlice({
    initialState: userAdepter.getInitialState({
        loading: false,
        error:''
    }),
    reducers: {

    },
    extraReducers: builder =>
    {
        
    }

})

export default userSlice.reducer;
