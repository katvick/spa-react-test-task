import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Post } from '../types/user-data';
import { APIRoute } from '../const';
import { loadPosts } from './posts/actions';

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