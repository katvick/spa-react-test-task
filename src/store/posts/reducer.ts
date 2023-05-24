import { createSlice } from '@reduxjs/toolkit';
import { PostsState } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchCommentsAction, fetchPostsAction } from '../api-actions';

const initialState: PostsState = {
  posts: [],
  comments: [],
  isPostsLoading: false,
  isCommentsLoading: false,
}

export const postsReducer = createSlice({
  name: NameSpace.Posts,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPostsAction.pending, (state) => {
        state.isPostsLoading = true;
      })
      .addCase(fetchPostsAction.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isPostsLoading = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsLoading = false;
      })
  }
})