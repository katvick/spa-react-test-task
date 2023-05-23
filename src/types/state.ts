import { Comment, Post, User } from "./user-data"

export type UserState = {
  userInfo: User;
  userPosts: Post[];
  commentsOnPost: Comment[];
}

export type PostsState = {
  posts: Post[];
  commentsOnPost: Comment[];
}