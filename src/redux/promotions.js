import * as AT from "./actionTypes";

export const promotions = (
  state = {
    isLoading: true,
    err: null,
    promotions: []
  },
  action
) => {
  switch (action.type) {
    case AT.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        err: null,
        promotions: action.payload
      };

    case AT.PROMOS_LOADING:
      return {
        ...state,
        isLoading: true,
        err: null,
        promotions: []
      };

    case AT.PROMOS_FAILED:
      return {
        ...state,
        isLoading: false,
        err: action.payload,
        promotions: []
      };

    default:
      return state;
  }
};
