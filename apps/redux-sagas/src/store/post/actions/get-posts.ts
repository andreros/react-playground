import type { AnyAction } from 'redux-saga';
import { type PayloadAction, action } from 'typesafe-actions';

import type { TGetPostsParams } from '@/services/types';

import { PostActionTypes, type PostState } from '../types';

export const getPosts = (payload: TGetPostsParams): PayloadAction<string, TGetPostsParams> => action(PostActionTypes.GET_POSTS, payload);

export const reducerGetPosts = (state: PostState, action: AnyAction): PostState => {
  const { itemsPerPage, page } = action.payload;

  return {
    ...state,
    itemsPerPage,
    page
  };
};
