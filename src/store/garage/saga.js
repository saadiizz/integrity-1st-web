import axios from "../../axios/AxiosConfig";
import { fork, put, all, takeLatest } from "redux-saga/effects";
import {
  startLoading,
  stopLoading,
  getCarsSuccess,
  getCarsFailed,
  serviceHistorySuccess,
  serviceHistoryFailed,
  serviceDueSuccess,
  serviceDueFailed,
  recommendedSuccess,
  recommendedFailed,
  deleteVehicleSuccess,
  deleteVehicleFailed,
} from "./actions";
import {
  DELETE_VEHICLE,
  GET_CARS,
  RECOMMENDED,
  SERVICE_DUE,
  SERVICE_HISTORY,
  SET_PREMIUM_VEHICLE,
} from "./actionTypes";
import { toast } from "react-hot-toast";
//getAllCars User Saga
function* getAllCars() {
  try {
    yield put(startLoading());
    const response = yield axios.get("/vehicle");
    yield put(getCarsSuccess(response.data));
  } catch (error) {
    yield put(getCarsFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//getServicesHistoryCars User Saga
function* getServicesHistoryCars({ payload }) {
  try {
    yield put(startLoading());
    const response = yield axios.get(`/vehicle/${payload}/service-history`);
    yield put(serviceHistorySuccess(response.data));
  } catch (error) {
    yield put(serviceHistoryFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//getServicesDueCars User Saga
function* getServicesDueCars({ payload }) {
  try {
    yield put(startLoading());
    const response = yield axios.get(
      `/vehicle/${payload.vehicleId}/maintenance-list?mileage=${payload.mileage}`
    );

    yield put(serviceDueSuccess(response.data));
  } catch (error) {
    yield put(serviceDueFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//getRecommendedServices User Saga
function* getRecommendedServices({ payload }) {
  try {
    yield put(startLoading());
    const response = yield axios.get(`/vehicle/${payload}/recommendations`);
    yield put(recommendedSuccess(response.data));
  } catch (error) {
    yield put(recommendedFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//deleteVehicleRequest User Saga
function* deleteVehicleRequest({ payload, vehicleId }) {
  try {
    yield put(startLoading());
    const response = yield axios.post(
      `/vehicle/${vehicleId}/deletion-request`,
      payload
    );
    yield put(deleteVehicleSuccess(response.data));
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(deleteVehicleFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

function* setPremiumVehicleRequest({ payload }) {
  try {
    yield put(startLoading());
    const headers = {
      "Content-Type": "application/json",
      Authorization: "ZUWLsJRP5QpOJ9PFIM9CHebAlk0X36AMtY9z0mo1VPfc6",
    };
    const response = yield axios.post(`/web-hooks/membership`, payload, {
      headers: headers,
    });
    yield put(deleteVehicleSuccess(response.data));
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(deleteVehicleFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//All Cars User Watcher
function* watchGetAllCars() {
  yield takeLatest(GET_CARS, getAllCars);
}

//All History Services Watcher
function* watchgetServicesHistory() {
  yield takeLatest(SERVICE_HISTORY, getServicesHistoryCars);
}

//All Due Services Watcher
function* watchgetServicesDue() {
  yield takeLatest(SERVICE_DUE, getServicesDueCars);
}

//All Recommended Watcher
function* watchgetRecommended() {
  yield takeLatest(RECOMMENDED, getRecommendedServices);
}

//All Recommended Watcher
function* watchrequestDelete() {
  yield takeLatest(DELETE_VEHICLE, deleteVehicleRequest);
}

//All Recommended Watcher
function* watchrequestSetPremium() {
  yield takeLatest(SET_PREMIUM_VEHICLE, setPremiumVehicleRequest);
}

export default function* garageSaga() {
  yield all([
    fork(watchGetAllCars),
    fork(watchgetServicesHistory),
    fork(watchgetServicesDue),
    fork(watchgetRecommended),
    fork(watchrequestDelete),
    fork(watchrequestSetPremium),
  ]);
}
