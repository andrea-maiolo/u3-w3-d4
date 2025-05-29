import { DELETE_FROM_LIST, SET_FAV } from "../actions";

const initialState = {
  content: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAV:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case DELETE_FROM_LIST:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favReducer;
