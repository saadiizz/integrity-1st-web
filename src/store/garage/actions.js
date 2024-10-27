import {
  STOP_LOADING,
  START_LOADING,
  GET_CARS,
  GET_CARS_SUCCESS,
  GET_CARS_FAILED,
  SERVICE_DUE,
  SERVICE_DUE_SUCCESS,
  SERVICE_DUE_FAILED,
  DELETE_VEHICLE,
  DELETE_VEHICLE_SUCCESS,
  DELETE_VEHICLE_FAILED,
  SERVICE_HISTORY,
  SERVICE_HISTORY_SUCCESS,
  SERVICE_HISTORY_FAILED,
  RECOMMENDED,
  RECOMMENDED_SUCCESS,
  RECOMMENDED_FAILED,
  SET_PREMIUM_VEHICLE,
  SET_PREMIUM_VEHICLE_SUCCESS,
  SET_PREMIUM_VEHICLE_FAILED,
} from "./actionTypes";

//GET_CARS action
export const getCars = () => {
  return {
    type: GET_CARS,
  };
};

//GET_CARS success action
export const getCarsSuccess = (data) => {
  return {
    type: GET_CARS_SUCCESS,
    payload: data,
  };
};

//GET_CARS failed action
export const getCarsFailed = (data) => {
  return {
    type: GET_CARS_FAILED,
    payload: data?.data?.message,
  };
};

//SERVICE_DUE action
export const serviceDue = (payload) => {
  return {
    type: SERVICE_DUE,
    payload: payload,
  };
};

//SERVICE_DUE success action
export const serviceDueSuccess = (data) => {
  return {
    type: SERVICE_DUE_SUCCESS,
    payload: data,
  };
};

//SERVICE_DUE failed action
export const serviceDueFailed = (data) => {
  return {
    type: SERVICE_DUE_FAILED,
    payload: data?.data?.message,
  };
};

//SERVICE_HISTORY action
export const serviceHistory = (vehicleId) => {
  return {
    type: SERVICE_HISTORY,
    payload: vehicleId,
  };
};

//SERVICE_HISTORY success action
export const serviceHistorySuccess = (data) => {
  return {
    type: SERVICE_HISTORY_SUCCESS,
    payload: data,
  };
};

//SERVICE_HISTORY failed action
export const serviceHistoryFailed = (data) => {
  return {
    type: SERVICE_HISTORY_FAILED,
    payload: data?.data?.message,
  };
};

//RECOMMENDED action
export const recommended = (vehicleId) => {
  return {
    type: RECOMMENDED,
    payload: vehicleId,
  };
};

//RECOMMENDED success action
export const recommendedSuccess = (data) => {
  return {
    type: RECOMMENDED_SUCCESS,
    payload: data,
  };
};

//RECOMMENDED failed action
export const recommendedFailed = (data) => {
  return {
    type: RECOMMENDED_FAILED,
    payload: data?.data?.message,
  };
};

//DELETE_VEHICLE action
export const deleteVehicle = (payload, vehicleId) => {
  return {
    type: DELETE_VEHICLE,
    payload: payload,
    vehicleId: vehicleId,
  };
};

//DELETE_VEHICLE success action
export const deleteVehicleSuccess = (data) => {
  return {
    type: DELETE_VEHICLE_SUCCESS,
    payload: data,
  };
};

//DELETE_VEHICLE failed action
export const deleteVehicleFailed = (data) => {
  return {
    type: DELETE_VEHICLE_FAILED,
    payload: data?.data?.message,
  };
};

//SET_PREMIUM_VEHICLE action
export const setPremiumVehicle = (payload) => {
  return {
    type: SET_PREMIUM_VEHICLE,
    payload: payload,
  };
};

//SET_PREMIUM_VEHICLE success action
export const setPremiumVehicleSuccess = (data) => {
  return {
    type: SET_PREMIUM_VEHICLE_SUCCESS,
    payload: data,
  };
};

//SET_PREMIUM_VEHICLE failed action
export const setPremiumVehicleFailed = (data) => {
  return {
    type: SET_PREMIUM_VEHICLE_FAILED,
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
