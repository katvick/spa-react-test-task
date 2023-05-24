import { createSlice } from '@reduxjs/toolkit';
import { PostsState } from '../../types/state';
import { NameSpace } from '../../const';
import { loadComments, loadPosts } from './actions';

const initialState: PostsState = {
  posts: [],
  comments: [],
}

export const postsReducer = createSlice({
  name: NameSpace.Posts,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadPosts, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(loadComments, (state, action) => {
        state.comments = action.payload;
      })
  }
})