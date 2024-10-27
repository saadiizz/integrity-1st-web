import produce from "immer";
import { toast } from "react-hot-toast";
import {
  DELETE_VEHICLE_FAILED,
  DELETE_VEHICLE_SUCCESS,
  GET_CARS_FAILED,
  GET_CARS_SUCCESS,
  RECOMMENDED_FAILED,
  RECOMMENDED_SUCCESS,
  SERVICE_DUE_FAILED,
  SERVICE_DUE_SUCCESS,
  SERVICE_HISTORY_FAILED,
  SERVICE_HISTORY_SUCCESS,
  SET_PREMIUM_VEHICLE_FAILED,
  SET_PREMIUM_VEHICLE_SUCCESS,
  START_LOADING,
  STOP_LOADING,
} from "./actionTypes";

const initialState = {
  carsList: null,
  servicesDueData: null,
  serviceHistoryData: null,
  recommendedData: null,
};

const Garage = produce((state, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case GET_CARS_SUCCESS:
      state.carsList = action.payload;
      break;

    case GET_CARS_FAILED:
      break;

    case SERVICE_DUE_SUCCESS:
      state.servicesDueData = action.payload;
      break;

    case SERVICE_DUE_FAILED:
      break;

    case SERVICE_HISTORY_SUCCESS:
      state.serviceHistoryData = action.payload;
      break;

    case SERVICE_HISTORY_FAILED:
      break;

    case RECOMMENDED_SUCCESS:
      state.recommendedData = action.payload;
      break;

    case RECOMMENDED_FAILED:
      break;

    case DELETE_VEHICLE_SUCCESS:
      console.log(action.payload);
      break;

    case DELETE_VEHICLE_FAILED:
      console.log(action.payload);
      break;

    case SET_PREMIUM_VEHICLE_SUCCESS:
      console.log(action.payload);
      break;

    case SET_PREMIUM_VEHICLE_FAILED:
      console.log(action.payload);
      break;

    default:
      break;
  }
}, initialState);

export default Garage;
