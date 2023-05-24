import { createSlice } from '@reduxjs/toolkit';
import { PostsState } from '../../types/state';
import { Posts } from '../../mocks/posts';
import { Comments } from '../../mocks/comments';
import { NameSpace } from '../../const';
import { loadPosts } from './actions';

const initialState: PostsState = {
  posts: Posts,
  comments: Comments,
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
  }
})