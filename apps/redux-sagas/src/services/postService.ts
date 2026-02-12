import type { AxiosPromise } from 'axios';

import { type TGetPostsParams, type TPostApiResponse, api } from './';

/**
 * Get posts
 */
export const getPostsApi = (params: TGetPostsParams = {}): AxiosPromise<TPostApiResponse[]> => {
  let { page, itemsPerPage } = params;

  if (!itemsPerPage) itemsPerPage = 100;
  if (page) page = page * itemsPerPage;
  else page = 0;

  return api({ method: 'get', url: `/posts?_start=${page}&_limit=${itemsPerPage}` });
};
