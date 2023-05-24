import { createAction } from '@reduxjs/toolkit';
import { Comment, Post } from '../../types/user-data';

export const loadPosts = createAction<Post[]>('posts/loadPosts');
export const loadComments = createAction<Comment[]>('loadComments');