import { PrefixActionTypes } from '../types';

export const PostActionTypes = {
  GET_POSTS: `${PrefixActionTypes.Post}/GET_POSTS`,
  GET_POSTS_SUCCESS: `${PrefixActionTypes.Post}/GET_POSTS_SUCCESS`
} as const;

export type TPostState = {
  itemsPerPage: number;
  page: number;
  posts: any[];
};
