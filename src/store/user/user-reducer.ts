import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types/state';
import { Users } from '../../mocks/user-info';
import { Posts } from '../../mocks/posts';
import { NameSpace } from '../../const';

const initialState: UserState = {
  users: Users,
  userPosts: Posts,
}

export const userReducer = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    
  }
})