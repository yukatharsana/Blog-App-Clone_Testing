import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getPost, addPost, updatePost, deletePost } from '../Thunk/PostThunk'

const postAdepter = createEntityAdapter({
    selectId: (post) => post.postid
})
export const postSlice = createSlice({
  name:"post",
    initialState: postAdepter.getInitialState({
        loading: false,
        error: ''

    }),
    reducer: {
}
    ,
    extraReducers: builder =>
    {
        builder.addCase(getPost.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getPost.fulfilled, (state, action) => {
        postAdepter.upsertMany(state,action.payload)
      })
      .addCase(getPost.rejected, (state, action) => {
        state.error = action.payload
      })
      .addCase(addPost.pending, (state, action) => {
        state.loading = true
      })
      .addCase(addPost.fulfilled, (state, action) => {
        postAdepter.addOne(state, action.payload)
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.payload
      })
      .addCase(deletePost.pending, (state, action) => {
        state.loading = true
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        postAdepter.removeOne(state, action.payload)
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.error = action.payload
      })
       .addCase(updatePost.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        postAdepter.setOne(state, action.payload)
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.error = action.payload
      })
    }
})
export const {
  selectAll: allPosts,
  selectEntities: alldata,
  selectById: postById,
  selectIds:postIds,
  selectTotal: postcount
} = postAdepter.getSelectors(state => state.post)

export default postSlice.reducer;
