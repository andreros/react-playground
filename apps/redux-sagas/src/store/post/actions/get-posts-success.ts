import { type PayloadAction, action } from 'typesafe-actions';

import type { TPostApiResponse } from '@/services/types';

import type { AnyAction } from 'redux-saga';
import { PostActionTypes, type PostState } from '../types';

export type TGetPostsSuccessActionParams = {
  posts: TPostApiResponse[];
};

export const getPostsSuccess = (payload: TGetPostsSuccessActionParams): PayloadAction<string, TGetPostsSuccessActionParams> =>
  action(PostActionTypes.GET_POSTS_SUCCESS, payload);

export const reducerGetPostsSuccess = (state: PostState, action: AnyAction): PostState => {
  const { posts } = action.payload;

  return {
    ...state,
    posts
  };
};
