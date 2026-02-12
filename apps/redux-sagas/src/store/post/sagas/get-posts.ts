import type { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import type { PayloadAction } from 'typesafe-actions';

import { getPostsApi } from '../../../services/postService';
import type { TGetPostsParams, TPostApiResponse } from '../../../services/types';

import { getPostsSuccess } from '../actions';
import { PostActionTypes } from '../types';

export function* handleGetPosts(action: PayloadAction<string, TGetPostsParams>): Generator {
  try {
    const { itemsPerPage, page } = action.payload;

    const response = (yield call(getPostsApi, { itemsPerPage, page })) as AxiosResponse<TPostApiResponse[]>;

    yield put(getPostsSuccess({ posts: response.data }));
  } catch (error) {
    console.error('PostsSaga > call handleGetPosts error', error);
  }
}

export function* watchGetPosts(): Generator {
  yield takeLatest(PostActionTypes.GET_POSTS, handleGetPosts);
}
