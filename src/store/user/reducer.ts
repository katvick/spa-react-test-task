import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types/state';
import { NameSpace } from '../../const';
import { loadUsers } from './actions';

const initialState: UserState = {
  users: [],
}

export const userReducer = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(loadUsers, (state, action) => {
        state.users = action.payload;
      })
  }
})