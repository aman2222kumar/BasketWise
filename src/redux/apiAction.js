import {
  API_GET_REQUEST,
  API_GET_SUCCESS,
  API_GET_FAILURE,
  DATA_ADD_TO_LIST,
  DATA_REMOVE_TO_LIST,
  COUNT_INCREMENT,
  COUNT_DECREMENT,
} from "../redux/apiConstant";

export const apiGetRequest = () => ({
  type: API_GET_REQUEST,
});

export const apiGetSuccess = (data) => ({
  type: API_GET_SUCCESS,
  payload: data,
});

export const apiGetFailure = (error) => ({
  type: API_GET_FAILURE,
  error: error.message,
});

export const fetchApiData = () => {
  return async (dispatch) => {
    dispatch(apiGetRequest());
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(apiGetSuccess(data));
    } catch (error) {
      dispatch(apiGetFailure(error));
    }
  };
};

//actions for data adding and removing from list

export const AddDataToListAction = (data) => {
  return {
    type: DATA_ADD_TO_LIST,
    payload: data,
  };
};

export const RemoveDataToListAction = (id) => {
  return {
    type: DATA_REMOVE_TO_LIST,
    payload: id,
  };
};

//action for count incrment and decrement
export const incrementProductCount = (productId, price) => ({
  type: COUNT_INCREMENT,
  payload: { productId, price },
});

export const decrementProductCount = (productId, price) => ({
  type: COUNT_DECREMENT,
  payload: { productId, price },
});
