import * as AT from "./actionTypes";

export const dishes = (
  state = {
    isLoading: true,
    err: null,
    dishes: []
  },
  action
) => {
  switch (action.type) {
    case AT.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        err: null,
        dishes: action.payload
      };

    case AT.DISHES_LOADING:
      return {
        ...state,
        isLoading: true,
        err: null,
        dishes: []
      };

    case AT.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        err: action.payload,
        dishes: []
      };

    default:
      return state;
  }
};
