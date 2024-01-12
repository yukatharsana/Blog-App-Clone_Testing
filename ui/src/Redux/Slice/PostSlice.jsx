import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getPost, addPost, updatePost, deletePost } from '../Thunk/PostThunk'
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

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
export const PostsCat = () =>
{
  const [seach, setSearch] = useSearchParams();
  const catgory=useMemo(()=>seach.get('cat'),[seach])
  const Posts = useSelector(allPosts);
  if (catgory === null)
    return Posts.map(post=>post.postid);
  else
    return Posts.filter(post => post.category === catgory).map(post=>post.postid);

}
export default postSlice.reducer;
