import axios from "../../axios/AxiosConfig";
import { fork, put, all, takeLatest } from "redux-saga/effects";
import {
  startLoading,
  stopLoading,
  getAppontmentRecSuccess,
  getAppontmentRecFailed,
  appontmentSuccess,
  appontmentFailed,
  getAppontmentSuccess,
  getAppontmentFailed,
} from "./actions";
import {
  APPOINTMENT,
  GET_APPOINTMENT,
  GET_APPOINTMENT_RECOMENDATIONS,
} from "./actionTypes";
import { toast } from "react-hot-toast";

//getAllRecomendations User Saga
function* getAllAppointmentRec() {
  try {
    yield put(startLoading());
    const response = yield axios.get("/appointment-reason");
    yield put(getAppontmentRecSuccess(response.data));
  } catch (error) {
    yield put(getAppontmentRecFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//getAllAppointments User Saga
function* getAllAppointment() {
  try {
    yield put(startLoading());
    const response = yield axios.get("/appointment");

    yield put(getAppontmentSuccess(response.data));
  } catch (error) {
    yield put(getAppontmentFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//getAllRecomendations User Saga
function* appointments({ payload, nav }) {
  try {
    yield put(startLoading());
    const response = yield axios.post("/appointment", payload);
    toast.success("Appointment Created");

    nav("/appointment/all-appointments");
    yield put(appontmentSuccess(response.data));
  } catch (error) {
    toast.error(error.response.message);
    yield put(appontmentFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//All Recomendations User Watcher
function* watchGetAppointmentRec() {
  yield takeLatest(GET_APPOINTMENT_RECOMENDATIONS, getAllAppointmentRec);
}

//All Appointments User Watcher
function* watchGetAppointment() {
  yield takeLatest(GET_APPOINTMENT, getAllAppointment);
}

//Create Appointment Watcher
function* watchPostAppointment() {
  yield takeLatest(APPOINTMENT, appointments);
}

export default function* appointmentSaga() {
  yield all([
    fork(watchGetAppointmentRec),
    fork(watchPostAppointment),
    fork(watchGetAppointment),
  ]);
}
