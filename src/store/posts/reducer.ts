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
  errorPostLoading: false,
  errorCommentsLoading: false,
  errorText: '',
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
        state.errorPostLoading = false;
      })
      .addCase(fetchPostsAction.fulfilled, (state, action) => {
        state.isPostsLoading = false;
        state.postsDefault = action.payload;
        state.postsSorted = action.payload;
      })
      .addCase(fetchPostsAction.rejected, (state, action) => {
        state.isPostsLoading = false;
        state.errorPostLoading = true;
        state.errorText = action.error.message;
      })

      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsLoading = true;
        state.errorCommentsLoading = false;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.isCommentsLoading = false;
        state.comments = action.payload;
      })
      .addCase(fetchCommentsAction.rejected, (state, action) => {
        state.isCommentsLoading = false;
        state.errorCommentsLoading = true;
        state.errorText = action.error.message;
      })
  }
})

export const {searchPosts, sortPosts, cancelSortPosts} = postsReducer.actions;