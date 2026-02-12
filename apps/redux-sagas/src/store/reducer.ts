import type { Action } from 'redux';

import { initialPostState, postReducer } from './post';
import { type BaseState, PrefixActionTypes } from './types';

export const initialBaseState: BaseState = {
  post: initialPostState
};

// biome-ignore lint/style/useDefaultParameterLast: <explanation>
export const baseReducer = (state: BaseState = initialBaseState, action: Action): BaseState => {
  const prefix = action.type.split('/')[0];

  switch (prefix) {
    case PrefixActionTypes.Post:
      return { ...state, post: postReducer(state.post, action) };
    default: {
      return state;
    }
  }
};
