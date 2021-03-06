import * as ActionTypes from '../actionTypes';

const initialState = {
  dataUser: false,
  loadingUser: false,
  successUser: false,
  error: false,
  errorMessage: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_LOADING:
      return {
        ...state,
        loadingUser: action.payload,
      };
    case ActionTypes.GET_USER_LIST_REQUEST:
      return {
        ...state,
        loadingUser: true,
        error: false,
        successUser: false,
        errorMessage: false,
      };
    case ActionTypes.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        loadingUser: false,
        successUser: true,
        dataUser: action.payload.dataUser,
      };
    case ActionTypes.GET_USER_LIST_FAILED:
      return {
        ...state,
        loadingUser: false,
        error: true,
        successUser: false,
        dataUser: action.payload.dataUser,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
