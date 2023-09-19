import { GET_JOBS, LOADING_STATE, ERROR_STATE } from "../actions";

const initialState = {
  stock: [],
  isLoading: true,
  isError: false,
};
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        stock: action.payload,
      };
    case LOADING_STATE:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ERROR_STATE:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default jobsReducer;
