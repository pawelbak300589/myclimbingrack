import authActionTypes from "./authTypes";

const INITIAL_STATE = {
  loading: false,
  loggedIn: false,
  currentUser: null,
  errors: []
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
    case authActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        loggedIn: false,
        currentUser: null,
        errors: []
      };
    case authActionTypes.LOGIN_SUCCESS:
      case authActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        currentUser: action.payload,
        errors: []
      };
    case authActionTypes.LOGIN_FAILURE:
      case authActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        currentUser: null,
        errors: action.payload
      };
    case authActionTypes.LOGOUT:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        currentUser: null,
        errors: []
      };
    default:
      return state;
  }
};

export default authReducer;