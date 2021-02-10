import authActionTypes from "./authTypes";

const INITIAL_STATE = {
  loading: false,
  loggedIn: false,
  currentUser: null,
  message: null,
  errors: []
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
    case authActionTypes.REGISTER_REQUEST:
    case authActionTypes.VERIFY_EMAIL_REQUEST:
    case authActionTypes.FORGOT_PASSWORD_REQUEST:
    case authActionTypes.VALIDATE_RESET_TOKEN_REQUEST:
    case authActionTypes.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        loggedIn: false,
        currentUser: null,
        message: null,
        errors: []
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        currentUser: action.payload,
        message: null,
        errors: []
      };
    case authActionTypes.REGISTER_SUCCESS:
    case authActionTypes.VERIFY_EMAIL_SUCCESS:
    case authActionTypes.VERIFY_EMAIL_FAILURE:
    case authActionTypes.FORGOT_PASSWORD_SUCCESS:
    case authActionTypes.VALIDATE_RESET_TOKEN_SUCCESS:
    case authActionTypes.VALIDATE_RESET_TOKEN_FAILURE:
    case authActionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        currentUser: null,
        message: action.payload,
        errors: []
      };
    case authActionTypes.LOGIN_FAILURE:
    case authActionTypes.REGISTER_FAILURE:
    case authActionTypes.FORGOT_PASSWORD_FAILURE:
    case authActionTypes.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        currentUser: null,
        message: null,
        errors: action.payload
      };
    case authActionTypes.LOGOUT:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        currentUser: null,
        message: null,
        errors: []
      };
    case authActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        errors: []
      };
    default:
      return state;
  }
};

export default authReducer;