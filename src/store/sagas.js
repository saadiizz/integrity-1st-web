import { all } from "redux-saga/effects";
import appointmentSaga from "./appointments/saga";
import authSaga from "./auth/saga";
import dashboardSaga from "./dashboard/saga";
import garageSaga from "./garage/saga";

export default function* rootSaga() {
  yield all([authSaga(), dashboardSaga(), garageSaga(),appointmentSaga()]);
}
