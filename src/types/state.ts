import { store } from '../store';
import { Comment, Post, User } from './user-data'

export type UserState = {
  users: User[];
  isUsersLoading: boolean;
}

export type PostsState = {
  posts: Post[];
  comments: Comment[];
  isPostsLoading: boolean;
  isCommentsLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;