import SetActionTypes from "./setTypes";

export const getAllUsersStart = (set) => ({
  type: SetActionTypes.GET_ALL_SETS_REQUEST,
  payload: set
});

export const getAllUsersSuccess = (set) => ({
  type: SetActionTypes.GET_ALL_SETS_SUCCESS,
  payload: set
});

export const getAllUsersFailure = (error) => ({
  type: SetActionTypes.GET_ALL_SETS_FAILURE,
  payload: error
});

export const getOneUserStart = (set) => ({
  type: SetActionTypes.GET_ONE_SET_REQUEST,
  payload: set
});

export const getOneUserSuccess = (set) => ({
  type: SetActionTypes.GET_ONE_SET_SUCCESS,
  payload: set
});

export const getOneUserFailure = (error) => ({
  type: SetActionTypes.GET_ONE_SET_FAILURE,
  payload: error
});

export const createUserStart = (set) => ({
  type: SetActionTypes.CREATE_SET_REQUEST,
  payload: set
});

export const createUserSuccess = (set) => ({
  type: SetActionTypes.CREATE_SET_SUCCESS,
  payload: set
});

export const createUserFailure = (error) => ({
  type: SetActionTypes.CREATE_SET_FAILURE,
  payload: error
});

export const updateUserStart = (set) => ({
  type: SetActionTypes.UPDATE_SET_REQUEST,
  payload: set
});

export const updateUserSuccess = (set) => ({
  type: SetActionTypes.UPDATE_SET_SUCCESS,
  payload: set
});

export const updateUserFailure = (error) => ({
  type: SetActionTypes.UPDATE_SET_FAILURE,
  payload: error
});

export const deleteUserStart = (set) => ({
  type: SetActionTypes.DELETE_SET_REQUEST,
  payload: set
});

export const deleteUserSuccess = (set) => ({
  type: SetActionTypes.DELETE_SET_SUCCESS,
  payload: set
});

export const deleteUserFailure = (error) => ({
  type: SetActionTypes.DELETE_SET_FAILURE,
  payload: error
});