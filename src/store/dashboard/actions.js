import {
  STOP_LOADING,
  START_LOADING,
  GET_OFFERS,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILED,
  GET_BLOGS,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILED,
  GET_DYNAMIC_KEYS_SUCCESS,
  GET_DYNAMIC_KEYS_FAILED,
  GET_DYNAMIC_KEYS,
} from "./actionTypes";

//GET_OFFERS action
export const getOffers = () => {
  return {
    type: GET_OFFERS,
  };
};

//GET_OFFERS success action
export const getOffersSuccess = (data) => {
  return {
    type: GET_OFFERS_SUCCESS,
    payload: data,
  };
};

//GET_OFFERS failed action
export const getOffersFailed = (data) => {
  return {
    type: GET_OFFERS_FAILED,
    payload: data?.data?.message,
  };
};

//GET_BLOGS action
export const getBlogs = () => {
  return {
    type: GET_BLOGS,
  };
};

//GET_BLOGS success action
export const getBlogsSuccess = (data) => {
  return {
    type: GET_BLOGS_SUCCESS,
    payload: data,
  };
};

//GET_BLOGS failed action
export const getBlogsFailed = (data) => {
  return {
    type: GET_BLOGS_FAILED,
    payload: data?.data?.message,
  };
};

//GET_DYNAMIC_KEYS action
export const getDynamicKeys = () => {
  return {
    type: GET_DYNAMIC_KEYS,
  };
};

//GET_DYNAMIC_KEYS success action
export const getDynamicKeysSuccess = (data) => {
  return {
    type: GET_DYNAMIC_KEYS_SUCCESS,
    payload: data,
  };
};

//GET_DYNAMIC_KEYS failed action
export const getDynamicKeysFailed = (data) => {
  return {
    type: GET_DYNAMIC_KEYS_FAILED,
    payload: data?.data?.message,
  };
};

//start loading action
export const startLoading = (data) => ({
  type: START_LOADING,
  payload: data,
});

//stop loading action
export const stopLoading = (data) => ({
  type: STOP_LOADING,
  payload: {
    action: data,
  },
});
