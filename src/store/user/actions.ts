import { createAction } from '@reduxjs/toolkit';
import { User } from '../../types/user-data';

export const loadUsers = createAction<User[]>('loadUsers');