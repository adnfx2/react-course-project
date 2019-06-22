import * as AT from "./actionTypes";

export const leaders = (
  state = {
    isLoading: true,
    err: null,
    leaders: []
  },
  action
) => {
  switch (action.type) {
    case AT.ADD_LEADERS:
      return {
        ...state,
        isLoading: false,
        err: null,
        leaders: action.payload
      };

    case AT.LEADERS_LOADING:
      return {
        ...state,
        isLoading: true,
        err: null,
        leaders: []
      };

    case AT.LEADERS_FAILED:
      return {
        ...state,
        isLoading: false,
        err: action.payload,
        leaders: []
      };

    default:
      return state;
  }
};
