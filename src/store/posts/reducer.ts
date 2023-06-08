import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PostsState } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchCommentsAction, fetchPostsAction } from '../api-actions';
import { sortByTitle, sortBySearch } from '../../utils/sort';

const initialState: PostsState = {
  postsDefault: [],
  postsSorted: [],
  comments: [],
  isPostsLoading: false,
  isCommentsLoading: false,
}

export const postsReducer = createSlice({
  name: NameSpace.Posts,
  initialState,
  reducers: {
    searchPosts: (state, action: PayloadAction<{searchPhrase: string}>) => {
      state.postsSorted = sortBySearch(state.postsDefault, action.payload.searchPhrase)
    },
    sortPosts: (state) => {
      state.postsSorted = state.postsSorted.sort(sortByTitle);
    },
    cancelSortPosts: (state) => {
      state.postsSorted = state.postsDefault;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPostsAction.pending, (state) => {
        state.isPostsLoading = true;
      })
      .addCase(fetchPostsAction.fulfilled, (state, action) => {
        state.postsDefault = action.payload;
        state.postsSorted = action.payload;
        state.isPostsLoading = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsLoading = false;
      })
  }
})

export const {searchPosts, sortPosts, cancelSortPosts} = postsReducer.actions;