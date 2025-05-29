import { HAS_ERROR_ON, SET_ERROR_MESSAGE } from "../actions";

const initialState = {
  errorMessage: "",
  hasError: false,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case HAS_ERROR_ON:
      return {
        ...state,
        hasError: !state.hasError,
      };
    default:
      return state;
  }
};

export default errorReducer;
