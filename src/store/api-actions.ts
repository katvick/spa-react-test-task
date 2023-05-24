import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Post, Comment, User } from '../types/user-data';
import { APIRoute } from '../const';
import { loadComments, loadPosts } from './posts/actions';
import { loadUsers } from './user/actions';

export const fetchPostsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPosts',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Post[]>(APIRoute.Posts);
    dispatch(loadPosts(data));
  }
)

export const fetchCommentsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(APIRoute.Comments)
    dispatch(loadComments(data));
  }
)

export const fetchUsersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchUsers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<User[]>(APIRoute.Users)
    dispatch(loadUsers(data));
  }
)