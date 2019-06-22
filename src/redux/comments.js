import * as AT from "./actionTypes";

export const comments = (state = { err: null, comments: [] }, action) => {
  switch (action.type) {
    case AT.ADD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        err: null,
        comments: action.payload
      };
    case AT.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        err: action.payload,
        comments: []
      };
    case AT.ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            ...action.payload
          }
        ]
      };
    default:
      return state;
  }
};
