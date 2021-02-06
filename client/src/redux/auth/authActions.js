import authActionTypes from "./authTypes";
import backend from "../../apis/backend";
import { history, authHeader } from "../../helpers";

export const login = (userLoginCredentials) => {
  const request = () => ({ type: authActionTypes.LOGIN_REQUEST });
  const success = (user) => ({ type: authActionTypes.LOGIN_SUCCESS, payload: user });
  const failure = (errors) => ({ type: authActionTypes.LOGIN_FAILURE, payload: errors });

  return async dispatch => {
    dispatch(request());

    try {
      const { data } = await backend.post('/auth/authenticate', userLoginCredentials, { withCredentials: true });
      dispatch(success(data));
      history.push('/dashboard');
    } catch (error) {
      dispatch(failure(error.errors));
    }
  };
};

export const register = (userRegisterCredentials) => {
  const request = () => ({ type: authActionTypes.REGISTER_REQUEST });
  const success = (message) => ({ type: authActionTypes.REGISTER_SUCCESS, payload: { message: message, type: 'success' } });
  const failure = (error) => ({ type: authActionTypes.REGISTER_FAILURE, payload: error });

  return async dispatch => {
    dispatch(request());

    try {
      const { data } = await backend.post('/auth/register', userRegisterCredentials);
      dispatch(success(data.message));
      history.push('/login');
    } catch (error) {
      console.log('register error : ', error);
      dispatch(failure(error.errors));
    }
  };
};

export const logout = () => async (dispatch, getState) => {
  try {
    const { data } = await backend.post('/auth/revoke-token', {}, {
      headers: authHeader(getState()),
      withCredentials: true
    })

    console.log(data);

    dispatch({ type: authActionTypes.LOGOUT });
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const verifyEmail = (token) => {
  const request = () => ({ type: authActionTypes.VERIFY_EMAIL_REQUEST });
  const success = (message) => ({ type: authActionTypes.VERIFY_EMAIL_SUCCESS, payload: { message: message, type: 'success' } });
  const failure = (error) => ({ type: authActionTypes.VERIFY_EMAIL_FAILURE, payload: { message: error, type: 'error' } });

  return async dispatch => {
    dispatch(request());

    try {
      const { data } = await backend.post('/auth/verify-email', { token });
      dispatch(success(data.message));
    } catch (error) {
      dispatch(failure(error.message));
    }
    history.push('/login');
  };
};

export const clearErrors = () => dispatch => dispatch({ type: authActionTypes.CLEAR_ERRORS });