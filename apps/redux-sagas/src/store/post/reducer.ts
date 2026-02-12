import type { AnyAction } from 'redux';
import { reducerGetPosts, reducerGetPostsSuccess } from './actions';
import { PostActionTypes, type TPostState } from './types';

export const initialPostState: TPostState = {
  itemsPerPage: 100,
  page: 0,
  posts: []
};

// biome-ignore lint/style/useDefaultParameterLast: <explanation>
export const postReducer = (state: TPostState = initialPostState, action: AnyAction): TPostState => {
  switch (action.type) {
    case PostActionTypes.GET_POSTS:
      return reducerGetPosts(state, action);
    case PostActionTypes.GET_POSTS_SUCCESS:
      return reducerGetPostsSuccess(state, action);
    default:
      return state;
  }
};
