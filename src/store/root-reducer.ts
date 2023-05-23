import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { postsReducer } from './main/posts-reducer';
import { userReducer } from './user/user-reducer';

export const rootReducer = combineReducers({
  [NameSpace.Posts]: postsReducer.reducer,
  [NameSpace.User]: userReducer.reducer,
})