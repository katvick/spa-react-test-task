import { store } from '../store';
import { Comment, Post, User } from './user-data'

export type UserState = {
  userInfo: User;
  userPosts: Post[];
  commentsOnPost: Comment[];
}

export type PostsState = {
  posts: Post[];
  commentsOnPost: Comment[];
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;