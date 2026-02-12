import { all, fork } from 'redux-saga/effects';
import { watchGetPosts } from './get-posts';

export function* postSaga(): Generator {
  // More action watchers ca be added, like this:
  // yield all([fork(watchGetPosts), fork(watchActionX), fork(watchActionY)]);
  yield all([fork(watchGetPosts)]);
}
