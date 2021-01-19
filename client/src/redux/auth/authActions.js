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
  const success = (user) => ({ type: authActionTypes.REGISTER_SUCCESS, payload: user });
  const failure = (error) => ({ type: authActionTypes.REGISTER_FAILURE, payload: error });

  return async dispatch => {
    dispatch(request());

    try {
      const { data } = await backend.post('/auth/register', userRegisterCredentials);
      dispatch(success(data));
      history.push('/');
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