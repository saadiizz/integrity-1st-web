import {
  STOP_LOADING,
  START_LOADING,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  VERIFY_PHONE,
  VERIFY_PHONE_SUCCESS,
  VERIFY_PHONE_FAILED,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SHOPS,
  SHOPS_SUCCESS,
  CLEAR_DATA,
  CLEAR_DATA_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_OTP,
  RESET_PASSWORD_OTP_SUCCESS,
  RESET_PASSWORD_OTP_FAILED,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILED,
} from "./actionTypes";

//login user action
export const loginUser = (data, nav) => {
  return {
    type: LOGIN,
    payload: data,
    nav: nav,
  };
};

//change password action
export const changePassword = (data, nav) => {
  return {
    type: CHANGE_PASSWORD,
    payload: data,
    nav: nav,
  };
};

//change password success action
export const changePasswordSuccess = (data, nav) => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: data,
    nav: nav,
  };
};

//change password failed action
export const changePasswordFailed = (data, nav) => {
  return {
    type: CHANGE_PASSWORD_FAILED,
    payload: data,
    nav: nav,
  };
};

//login user success action
export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

//login user failed action
export const loginFailed = (data) => {
  return {
    type: LOGIN_FAILED,
    payload: data?.data?.message,
  };
};

//register user action
export const registerUser = (data, nav) => {
  sessionStorage.setItem("phoneNumber", data?.phoneNumber);
  return {
    type: REGISTER,
    payload: data,
    nav: nav,
  };
};

//register user success action
export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

//register user failed action
export const registerFailed = (data) => {
  return {
    type: REGISTER_FAILED,
    payload: data?.data?.message,
  };
};

//get all shops action
export const getShops = () => {
  return {
    type: SHOPS,
  };
};

//get all shops success action
export const getShopsSuccess = (data) => {
  return {
    type: SHOPS_SUCCESS,
    payload: data,
  };
};

//verify phone action
export const verifyPhone = (data, nav) => {
  return {
    type: VERIFY_PHONE,
    payload: data,
    nav: nav,
  };
};

//verify phone success action
export const verifyPhoneSuccess = (data) => {
  return {
    type: VERIFY_PHONE_SUCCESS,
    payload: data,
  };
};

//verify phone failed action
export const verifyPhoneFailed = (data) => {
  return {
    type: VERIFY_PHONE_FAILED,
    payload: data?.data?.message,
  };
};

//SignUp user action
export const signupUser = (data, nav) => {
  return {
    type: SIGNUP,
    payload: data,
    nav: nav,
  };
};

//SignUp user success action
export const signupUserSuccess = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: data,
  };
};

//SignUp user failed action
export const signupUserFailed = (data) => {
  return {
    type: SIGNUP_FAILED,
    payload: data?.data?.message,
  };
};

//Reset Password action
export const resetPassword = (data, nav) => {
  return {
    type: RESET_PASSWORD,
    payload: data,
    nav: nav,
  };
};

//Reset Password success action
export const resetPasswordSuccess = (data, phone) => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: data,
    phone: phone,
  };
};

//Reset Password failed action
export const resetPasswordFailed = (data) => {
  return {
    type: RESET_PASSWORD_FAILED,
    payload: data?.data?.message,
  };
};

//Reset Password OTP action
export const resetPasswordOTP = (data, nav) => {
  return {
    type: RESET_PASSWORD_OTP,
    payload: data,
    nav: nav,
  };
};

//Reset Password OTP success action
export const resetPasswordOTPSuccess = (data) => {
  return {
    type: RESET_PASSWORD_OTP_SUCCESS,
    payload: data,
  };
};

//Reset Password OTP failed action
export const resetPasswordOTPFailed = (data) => {
  return {
    type: RESET_PASSWORD_OTP_FAILED,
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

//clear data action
export const clearData = (data) => {
  return {
    type: CLEAR_DATA,
    payload: data,
  };
};

//clear data success action
export const clearDataSuccess = (data) => {
  return { type: CLEAR_DATA_SUCCESS, payload: data };
};
