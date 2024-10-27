import axios from "../../axios/AxiosConfig";
import { fork, put, all, takeLatest } from "redux-saga/effects";
import {
  CLEAR_DATA,
  LOGIN,
  REGISTER,
  CHANGE_PASSWORD,
  RESET_PASSWORD,
  RESET_PASSWORD_OTP,
  SHOPS,
  SIGNUP,
  VERIFY_PHONE,
} from "./actionTypes";
import {
  stopLoading,
  loginSuccess,
  registerSuccess,
  startLoading,
  getShopsSuccess,
  loginFailed,
  verifyPhoneSuccess,
  verifyPhoneFailed,
  clearDataSuccess,
  registerFailed,
  signupUserFailed,
  signupUserSuccess,
  resetPasswordSuccess,
  resetPasswordFailed,
  changePasswordSuccess,
  changePasswordFailed,
} from "./actions";

//Clear Data Saga
function* clearErrorData({ payload }) {
  try {
    yield put(startLoading());
    yield put(clearDataSuccess(payload));
  } catch (error) {
  } finally {
    yield put(stopLoading());
  }
}

//Login User Saga

function* login({ payload, nav }) {
  try {
    yield put(startLoading());
    const response = yield axios.post("/auth/login", payload);
    nav("/dashboard");
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//Register User Saga

function* register({ payload, nav }) {
  try {
    yield put(startLoading());
    const response = yield axios.post("/auth/send-phonecode", payload);
    nav("/verify");
    yield put(registerSuccess(response.data));
  } catch (error) {
    yield put(registerFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//Verify User Saga

function* vreifyPhone({ payload, nav }) {
  try {
    yield put(startLoading());
    const response = yield axios.post("/auth/verify-phonecode", payload);
    nav("/signup");
    yield put(verifyPhoneSuccess(response.data));
  } catch (error) {
    yield put(verifyPhoneFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//Signup User Saga
function* signUp({ payload, nav }) {
  const token = sessionStorage.getItem("signupToken");
  try {
    yield put(startLoading());
    const response = yield axios.post("/users/post-register", payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    sessionStorage.removeItem("signupToken");
    nav("/dashboard");
    yield put(signupUserSuccess(response.data));
  } catch (error) {
    yield put(signupUserFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//Change Password Saga

function* changePassword({ payload, nav }) {
  debugger;
  try {
    yield put(startLoading());
    const response = yield axios.post("/auth/change-password", payload);
    debugger;
    nav("/account");
    yield put(changePasswordSuccess(response.data));
  } catch (error) {
    yield put(changePasswordFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//Reset Password Saga

function* resetUserPassword({ payload, nav }) {
  try {
    yield put(startLoading());
    const response = yield axios.post("/auth/send-forgot-phonecode", payload);
    nav("/password/otp");
    yield put(resetPasswordSuccess(response.data, payload));
  } catch (error) {
    yield put(resetPasswordFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//Reset Password OTP Saga

function* resetUserPasswordOTP({ payload, nav }) {
  try {
    yield put(startLoading());
    const response = yield axios.post("/auth/verify-forgot-phonecode", payload);
    nav("/password/recover");
    yield put(resetPasswordSuccess(response.data, payload));
  } catch (error) {
    yield put(resetPasswordFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//Get All Stores Saga

function* getStores({ payload }) {
  try {
    yield put(startLoading());
    const response = yield axios.get("/shops");
    yield put(getShopsSuccess(response.data));
  } catch (error) {
    // yield sagaErrorHandler(error.response);
  } finally {
    yield put(stopLoading());
  }
}

//Clear Data Watcher
function* watchClearData() {
  yield takeLatest(CLEAR_DATA, clearErrorData);
}

//Login User Watcher

function* watchLogin() {
  yield takeLatest(LOGIN, login);
}

//Register User Watcher

function* watchRegister() {
  yield takeLatest(REGISTER, register);
}

//Verify User Watcher

function* watchVrifyPhone() {
  yield takeLatest(VERIFY_PHONE, vreifyPhone);
}

//Signup User Watcher

function* watchSignupUser() {
  yield takeLatest(SIGNUP, signUp);
}

//Change Password Watcher

function* watchChangePassword() {
  yield takeLatest(CHANGE_PASSWORD, changePassword);
}

//reset password Watcher

function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD, resetUserPassword);
}

//reset password otp User Watcher

function* watchResetPasswordOTP() {
  yield takeLatest(RESET_PASSWORD_OTP, resetUserPasswordOTP);
}

//Get Shops Watcher

function* watchGetShops() {
  yield takeLatest(SHOPS, getStores);
}

export default function* authSaga() {
  yield all([
    fork(watchRegister),
    fork(watchVrifyPhone),
    fork(watchGetShops),
    fork(watchLogin),
    fork(watchClearData),
    fork(watchSignupUser),
    fork(watchChangePassword),
    fork(watchResetPassword),
    fork(watchResetPasswordOTP),
  ]);
}
