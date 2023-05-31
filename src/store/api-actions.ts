import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Post, Comment, User } from '../types/user-data';
import { APIRoute } from '../const';

export const fetchPostsAction = createAsyncThunk<Post[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPosts',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Post[]>(APIRoute.Posts);
    return data;
  }
)

export const fetchCommentsAction = createAsyncThunk<Comment[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(APIRoute.Comments)
    return data;
  }
)

export const fetchUsersAction = createAsyncThunk<User[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchUsers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<User[]>(APIRoute.Users)
    return data;
  }
)