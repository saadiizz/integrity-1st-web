import produce from "immer";
import {
  APPOINTMENT_FAILED,
  APPOINTMENT_SUCCESS,
  GET_APPOINTMENT_FAILED,
  GET_APPOINTMENT_RECOMENDATIONS_FAILED,
  GET_APPOINTMENT_RECOMENDATIONS_SUCCESS,
  GET_APPOINTMENT_SUCCESS,
  START_LOADING,
  STOP_LOADING,
} from "./actionTypes";

const initialState = {
  recomended: null,
  appointments: null,
};

const Appointments = produce((state, action) => {
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

    case GET_APPOINTMENT_RECOMENDATIONS_SUCCESS:
      state.recomended = action.payload;
      break;

    case GET_APPOINTMENT_RECOMENDATIONS_FAILED:
      break;

    case GET_APPOINTMENT_SUCCESS:
      state.appointments = action.payload;
      break;

    case GET_APPOINTMENT_FAILED:
      break;

    case APPOINTMENT_SUCCESS:
      break;

    case APPOINTMENT_FAILED:
      break;
    default:
      break;
  }
}, initialState);

export default Appointments;
