import { createAction } from '@reduxjs/toolkit';
import { Post } from '../../types/user-data';

export const loadPosts = createAction<Post[]>('posts/loadPosts');