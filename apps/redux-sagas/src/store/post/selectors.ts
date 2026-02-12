import type { TPostApiResponse } from '@/services/types';

import type { StoreState } from '../types';

export const getPostPosts = (state: StoreState): TPostApiResponse[] => {
  return state.baseState.post.posts || [];
};
