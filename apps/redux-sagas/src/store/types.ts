import type { PostState } from './post/types';

export const PrefixActionTypes = {
  Post: '@@base@Post'
};

export interface BaseState {
  post: PostState;
}

export interface StoreState {
  baseState: BaseState;
}
