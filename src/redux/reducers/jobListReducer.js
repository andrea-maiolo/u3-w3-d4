import { SET_JOB_LIST } from "../actions";

const initialState = {
  content: [],
};

const jobListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOB_LIST:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default jobListReducer;
