import {
  STOP_LOADING,
  START_LOADING,
  GET_APPOINTMENT_RECOMENDATIONS,
  GET_APPOINTMENT_RECOMENDATIONS_SUCCESS,
  GET_APPOINTMENT_RECOMENDATIONS_FAILED,
  GET_APPOINTMENT,
  GET_APPOINTMENT_SUCCESS,
  GET_APPOINTMENT_FAILED,
  APPOINTMENT,
  APPOINTMENT_SUCCESS,
  APPOINTMENT_FAILED,
} from "./actionTypes";

//GET_APPOINTMENT_RECOMENDATIONS action
export const getAppontmentRec = () => {
  return {
    type: GET_APPOINTMENT_RECOMENDATIONS,
  };
};

//GET_APPOINTMENT_RECOMENDATIONS success action
export const getAppontmentRecSuccess = (data) => {
  return {
    type: GET_APPOINTMENT_RECOMENDATIONS_SUCCESS,
    payload: data,
  };
};

//GET_APPOINTMENT_RECOMENDATIONS failed action
export const getAppontmentRecFailed = (data) => {
  return {
    type: GET_APPOINTMENT_RECOMENDATIONS_FAILED,
    payload: data?.data?.message,
  };
};

//GET_APPOINTMENT action
export const getAppontment = () => {
  return {
    type: GET_APPOINTMENT,
  };
};

//GET_APPOINTMENT success action
export const getAppontmentSuccess = (data) => {
  return {
    type: GET_APPOINTMENT_SUCCESS,
    payload: data,
  };
};

//GET_APPOINTMENT failed action
export const getAppontmentFailed = (data) => {
  return {
    type: GET_APPOINTMENT_FAILED,
    payload: data?.data?.message,
  };
};

//APPOINTMENT action
export const appontment = (data, nav) => {
  return {
    type: APPOINTMENT,
    payload: data,
    nav: nav,
  };
};

//APPOINTMENT success action
export const appontmentSuccess = (data) => {
  return {
    type: APPOINTMENT_SUCCESS,
    payload: data,
  };
};

//APPOINTMENT failed action
export const appontmentFailed = (data) => {
  return {
    type: APPOINTMENT_FAILED,
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
