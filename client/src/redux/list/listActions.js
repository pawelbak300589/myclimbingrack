import ListActionTypes from "./listTypes";

export const getAllUserStart = (list) => ({
  type: ListActionTypes.GET_ALL_LISTS_REQUEST,
  payload: list
});

export const getAllUserSuccess = (list) => ({
  type: ListActionTypes.GET_ALL_LISTS_SUCCESS,
  payload: list
});

export const getAllUserFailure = (error) => ({
  type: ListActionTypes.GET_ALL_LISTS_FAILURE,
  payload: error
});

export const getOneUserStart = (list) => ({
  type: ListActionTypes.GET_ONE_LIST_REQUEST,
  payload: list
});

export const getOneUserSuccess = (list) => ({
  type: ListActionTypes.GET_ONE_LIST_SUCCESS,
  payload: list
});

export const getOneUserFailure = (error) => ({
  type: ListActionTypes.GET_ONE_LIST_FAILURE,
  payload: error
});

export const createUserStart = (list) => ({
  type: ListActionTypes.CREATE_LIST_REQUEST,
  payload: list
});

export const createUserSuccess = (list) => ({
  type: ListActionTypes.CREATE_LIST_SUCCESS,
  payload: list
});

export const createUserFailure = (error) => ({
  type: ListActionTypes.CREATE_LIST_FAILURE,
  payload: error
});

export const updateUserStart = (list) => ({
  type: ListActionTypes.UPDATE_LIST_REQUEST,
  payload: list
});

export const updateUserSuccess = (list) => ({
  type: ListActionTypes.UPDATE_LIST_SUCCESS,
  payload: list
});

export const updateUserFailure = (error) => ({
  type: ListActionTypes.UPDATE_LIST_FAILURE,
  payload: error
});

export const deleteUserStart = (list) => ({
  type: ListActionTypes.DELETE_LIST_REQUEST,
  payload: list
});

export const deleteUserSuccess = (list) => ({
  type: ListActionTypes.DELETE_LIST_SUCCESS,
  payload: list
});

export const deleteUserFailure = (error) => ({
  type: ListActionTypes.DELETE_LIST_FAILURE,
  payload: error
});