import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchUsersAction } from '../api-actions';

const initialState: UserState = {
  users: [],
  isUsersLoading: false,
}

export const userReducer = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsersAction.pending, (state) => {
        state.isUsersLoading = true;
      })
      .addCase(fetchUsersAction.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isUsersLoading = false;
      })
  }
})