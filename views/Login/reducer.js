import { initialState } from "./constants";
import { actions } from "./actions";

export const reducer = (
  state = initialState,
  action = { type: "", name: "" }
) => {
  switch (action.type) {
    case actions.submit:
      return {
        ...state,
        isLoading: true,
      };
    case actions.submitSuccess:
      return {
        ...state,
        isLoading: false,
      };
    case actions.submitError:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actions.setData:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.payload,
        },
      };
    default:
      return state;
  }
};
