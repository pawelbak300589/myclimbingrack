import UserActionTypes from "./userTypes";

export const getAllUsersStart = (user) => ({
  type: UserActionTypes.GET_ALL_USERS_REQUEST,
  payload: user
});

export const getAllUsersSuccess = (user) => ({
  type: UserActionTypes.GET_ALL_USERS_SUCCESS,
  payload: user
});

export const getAllUsersFailure = (error) => ({
  type: UserActionTypes.GET_ALL_USERS_FAILURE,
  payload: error
});

export const getOneUserStart = (user) => ({
  type: UserActionTypes.GET_ONE_USER_REQUEST,
  payload: user
});

export const getOneUserSuccess = (user) => ({
  type: UserActionTypes.GET_ONE_USER_SUCCESS,
  payload: user
});

export const getOneUserFailure = (error) => ({
  type: UserActionTypes.GET_ONE_USER_FAILURE,
  payload: error
});

export const createUserStart = (user) => ({
  type: UserActionTypes.CREATE_USER_REQUEST,
  payload: user
});

export const createUserSuccess = (user) => ({
  type: UserActionTypes.CREATE_USER_SUCCESS,
  payload: user
});

export const createUserFailure = (error) => ({
  type: UserActionTypes.CREATE_USER_FAILURE,
  payload: error
});

export const updateUserStart = (user) => ({
  type: UserActionTypes.UPDATE_USER_REQUEST,
  payload: user
});

export const updateUserSuccess = (user) => ({
  type: UserActionTypes.UPDATE_USER_SUCCESS,
  payload: user
});

export const updateUserFailure = (error) => ({
  type: UserActionTypes.UPDATE_USER_FAILURE,
  payload: error
});

export const deleteUserStart = (user) => ({
  type: UserActionTypes.DELETE_USER_REQUEST,
  payload: user
});

export const deleteUserSuccess = (user) => ({
  type: UserActionTypes.DELETE_USER_SUCCESS,
  payload: user
});

export const deleteUserFailure = (error) => ({
  type: UserActionTypes.DELETE_USER_FAILURE,
  payload: error
});