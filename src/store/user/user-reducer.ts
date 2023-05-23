import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types/state';
import { Users } from '../../mocks/user-info';
import { Posts } from '../../mocks/posts';
import { Comments } from '../../mocks/comments';
import { NameSpace } from '../../const';

const initialState: UserState = {
  userInfo: Users[0],
  userPosts: Posts,
  commentsOnPost: Comments,
}

export const userReducer = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    
  }
})