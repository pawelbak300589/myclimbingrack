import brandActionTypes from "./brandTypes";
import backend from "../../apis/backend";
import { history, authHeader } from "../../helpers";

export const getAll = () => {
  const request = () => ({ type: brandActionTypes.GET_ALL_REQUEST });
  const successResult = (successData) => ({ type: brandActionTypes.GET_ALL_SUCCESS, payload: successData });
  const failureResult = (error) => ({ type: brandActionTypes.GET_ALL_FAILURE, payload: error });

  return async (dispatch, getState) => {
    dispatch(request());

    try {
      const { data } = await backend.get('/brands', {
        params: {
          page: getState().brands.pagination.current_page,
          per_page: getState().brands.pagination.per_page,
          search_phrase: getState().brands.search.phrase,
          search_exact: getState().brands.search.exact,
        },
        headers: authHeader(getState())
      });

      const modifiedData = {
        ...data,
        // ...JSON.parse(data), // TODO: should it by parsed? check it!
        search: getState().brands.search,
      };
      dispatch(successResult(modifiedData));
    } catch (error) {
      console.log(error.message);
      dispatch(failureResult(error.message));
      dispatch(errorAlert('Something went wrong!', error.message));
    }
  };
};

export const getOne = (brandId) => {
  const request = () => ({ type: brandActionTypes.GET_ONE_REQUEST });
  const successResult = (brand) => ({ type: brandActionTypes.GET_ONE_SUCCESS, payload: brand });
  const failureResult = (error) => ({ type: brandActionTypes.GET_ONE_FAILURE, payload: error });

  return async (dispatch, getState) => {
    dispatch(request());

    try {
      const { data } = await backend.get('/brands/' + brandId, {
        headers: authHeader(getState())
      })
      dispatch(successResult(JSON.parse(data)));
    } catch (error) {
      console.log(error.message);
      dispatch(failureResult(error.message));
      dispatch(errorAlert('Something went wrong!', error.message));
    }
  };
};

export const create = (formData) => {
  const request = () => ({ type: brandActionTypes.CREATE_REQUEST });
  const successResult = (brand) => ({ type: brandActionTypes.CREATE_SUCCESS, payload: brand });
  const failureResult = (error) => ({ type: brandActionTypes.CREATE_FAILURE, payload: error });

  return async (dispatch, getState) => {
    dispatch(request());

    try {
      const { data } = await backend.post('/brands', formData, {
        headers: authHeader(getState())
      })
      const brand = JSON.parse(data);
      dispatch(successResult(brand));
      dispatch(success('Brand Created!', 'New brand is successfully created.'));
      history.push('/brands/show/' + brand.id);
    } catch (error) {
      console.log(error.message);
      dispatch(failureResult(error.message));
      dispatch(errorAlert('Something went wrong!', error.message));
    }
  };
};

export const update = (id, formData) => {
  const request = () => ({ type: brandActionTypes.UPDATE_REQUEST });
  const successResult = (brand) => ({ type: brandActionTypes.UPDATE_SUCCESS, payload: brand });
  const failureResult = (error) => ({ type: brandActionTypes.UPDATE_FAILURE, payload: error });

  return async (dispatch, getState) => {
    dispatch(request());

    try {
      const { data } = await backend.patch('/brands/' + id, formData, {
        headers: authHeader(getState())
      });
      const brand = JSON.parse(data);
      dispatch(successResult(brand));
      dispatch(success('Brand Updated!', `Brand was successfully updated.`));
      history.push('/brands/show/' + brand.id);
    } catch (error) {
      console.log(error.message);
      dispatch(failureResult(error.message));
      dispatch(errorAlert('Something went wrong!', error.message));
    }
  };
};

export const remove = (id) => {
  const request = () => ({ type: brandActionTypes.DELETE_REQUEST });
  const successResult = (brandId) => ({ type: brandActionTypes.DELETE_SUCCESS, payload: brandId });
  const failureResult = (error) => ({ type: brandActionTypes.DELETE_FAILURE, payload: error });

  return async (dispatch, getState) => {
    dispatch(request());

    try {
      const { data } = await backend.delete('/brands/' + id, {
        headers: authHeader(getState())
      })
      dispatch(successResult(Number(data)));
      dispatch(success('Brand Removed!', `Brand successfully removed.`));
      history.push('/brands');
    } catch (error) {
      console.log(error.message);
      dispatch(failureResult(error.message));
      dispatch(errorAlert('Something went wrong!', error.message));
    }
  };
};

export const changeCurrentPage = (page) => {
  return (dispatch) => {
    dispatch({ type: brandActionTypes.CHANGE_CURRENT_PAGE, payload: page });
    dispatch(getAll());
  };
};

export const changeItemsPerPage = (itemsPerPage) => {
  return (dispatch) => {
    dispatch({ type: brandActionTypes.CHANGE_ITEMS_PER_PAGE, payload: itemsPerPage });
    dispatch(getAll());
  };
};

export const updateSearchPhrase = (searchData) => {
  return (dispatch) => {
    dispatch({
      type: brandActionTypes.UPDATE_SEARCH_PHRASE,
      payload: { phrase: searchData.phrase, exact: searchData.exact }
    });
    dispatch(getAll());
  };
};