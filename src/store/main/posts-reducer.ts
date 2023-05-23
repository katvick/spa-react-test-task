import { createSlice } from '@reduxjs/toolkit';
import { PostsState } from '../../types/state';
import { Posts } from '../../mocks/posts';
import { Comments } from '../../mocks/comments';
import { NameSpace } from '../../const';

const initialState: PostsState = {
  posts: Posts,
  commentsOnPost: Comments,
}

export const postsReducer = createSlice({
  name: NameSpace.Posts,
  initialState,
  reducers: {},
  extraReducers(builder) {
    
  }
})