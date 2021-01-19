import GearActionTypes from "./gearTypes";

export const getAllUsersStart = (gear) => ({
  type: GearActionTypes.GET_ALL_GEARS_REQUEST,
  payload: gear
});

export const getAllUsersSuccess = (gear) => ({
  type: GearActionTypes.GET_ALL_GEARS_SUCCESS,
  payload: gear
});

export const getAllUsersFailure = (error) => ({
  type: GearActionTypes.GET_ALL_GEARS_FAILURE,
  payload: error
});

export const getOneUserStart = (gear) => ({
  type: GearActionTypes.GET_ONE_GEAR_REQUEST,
  payload: gear
});

export const getOneUserSuccess = (gear) => ({
  type: GearActionTypes.GET_ONE_GEAR_SUCCESS,
  payload: gear
});

export const getOneUserFailure = (error) => ({
  type: GearActionTypes.GET_ONE_GEAR_FAILURE,
  payload: error
});

export const createUserStart = (gear) => ({
  type: GearActionTypes.CREATE_GEAR_REQUEST,
  payload: gear
});

export const createUserSuccess = (gear) => ({
  type: GearActionTypes.CREATE_GEAR_SUCCESS,
  payload: gear
});

export const createUserFailure = (error) => ({
  type: GearActionTypes.CREATE_GEAR_FAILURE,
  payload: error
});

export const updateUserStart = (gear) => ({
  type: GearActionTypes.UPDATE_GEAR_REQUEST,
  payload: gear
});

export const updateUserSuccess = (gear) => ({
  type: GearActionTypes.UPDATE_GEAR_SUCCESS,
  payload: gear
});

export const updateUserFailure = (error) => ({
  type: GearActionTypes.UPDATE_GEAR_FAILURE,
  payload: error
});

export const deleteUserStart = (gear) => ({
  type: GearActionTypes.DELETE_GEAR_REQUEST,
  payload: gear
});

export const deleteUserSuccess = (gear) => ({
  type: GearActionTypes.DELETE_GEAR_SUCCESS,
  payload: gear
});

export const deleteUserFailure = (error) => ({
  type: GearActionTypes.DELETE_GEAR_FAILURE,
  payload: error
});