import produce from "immer";
import { toast } from "react-hot-toast";
import {
  STOP_LOADING,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  START_LOADING,
  SHOPS_SUCCESS,
  LOGIN_FAILED,
  CLEAR_DATA,
  VERIFY_PHONE_SUCCESS,
  VERIFY_PHONE_FAILED,
  REGISTER_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_OTP_SUCCESS,
  RESET_PASSWORD_OTP_FAILED,
} from "./actionTypes";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  errorMessage: null,
  shops: [],
};

const Auth = produce((state, action) => {
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
    case CLEAR_DATA:
      state.errorMessage = action.payload;
      break;
    case LOGIN_SUCCESS:
      sessionStorage.setItem("token", action.payload.token);
      state.user = action.payload.user;
      state.errorMessage = null;
      break;

    case LOGIN_FAILED:
      state.errorMessage = action.payload;
      break;
    case REGISTER_SUCCESS:
      break;
    case REGISTER_FAILED:
      state.errorMessage = action.payload;
      break;

    case SHOPS_SUCCESS:
      state.shops = action.payload;
      break;
    case VERIFY_PHONE_SUCCESS:
      sessionStorage.setItem("signupToken", action.payload.token);
      break;
    case VERIFY_PHONE_FAILED:
      toast.error("This didn't work.");
      break;

    case CHANGE_PASSWORD_SUCCESS:
      toast.success(action.payload);
      break;

    case CHANGE_PASSWORD_FAILED:
      debugger;
      toast.error(action.payload.data.message);

      break;

    case RESET_PASSWORD_SUCCESS:
      sessionStorage.setItem("resetPhone", action.phone.phoneNumber);
      break;
    case RESET_PASSWORD_FAILED:
      toast.error("This didn't work.");
      break;

    case RESET_PASSWORD_OTP_SUCCESS:
      break;
    case RESET_PASSWORD_OTP_FAILED:
      toast.error("This didn't work.");
      break;

    case SIGNUP_SUCCESS:
      break;
    case SIGNUP_FAILED:
      break;
    default:
      break;
  }
}, initialState);

export default Auth;
