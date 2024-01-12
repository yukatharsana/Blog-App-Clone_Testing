import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getUser, addUser, updateUser, deleteUser } from '../Thunk/UserThunk'

const userAdepter = createEntityAdapter({
  selectId: (user) => user.userid
})
export const userSlice = createSlice({
  name:"user",
  initialState: userAdepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {
    login: (state, action) =>
    {
      console.log(state);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getUser.fulfilled, (state, action) => {
        userAdepter.upsertMany(state,action.payload)
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload
      })
      .addCase(addUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(addUser.fulfilled, (state, action) => {
        userAdepter.addOne(state, action.payload)
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.payload
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        userAdepter.removeOne(state, action.payload)
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload
      })
       .addCase(updateUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        userAdepter.setOne(state, action.payload)
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload
      })
  }
})
export const {
  selectAll: allUser,
  selectEntities: alldata,
  selectById: userById,
  selectIds: userIds,
  selectTotal:usercount
} = userAdepter.getSelectors(state=>state.user)

export default userSlice.reducer
