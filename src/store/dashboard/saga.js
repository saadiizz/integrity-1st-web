import axios from "../../axios/AxiosConfig";
import { fork, put, all, takeLatest } from "redux-saga/effects";
import { GET_BLOGS, GET_DYNAMIC_KEYS, GET_OFFERS } from "./actionTypes";
import {
  startLoading,
  stopLoading,
  getOffersSuccess,
  getOffersFailed,
  getBlogsSuccess,
  getBlogsFailed,
  getDynamicKeysSuccess,
  getDynamicKeysFailed,
} from "./actions";

//getAllOffers User Saga
function* getAllOffers() {
  try {
    yield put(startLoading());
    const response = yield axios.get("/offer");
    yield put(getOffersSuccess(response.data));
  } catch (error) {
    yield put(getOffersFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//getAllBlogs User Saga
function* getAllBlogs() {
  try {
    yield put(startLoading());
    const response = yield axios.get("/blog");
    yield put(getBlogsSuccess(response.data));
  } catch (error) {
    yield put(getBlogsFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//getAllDynamicKeys User Saga
function* getAllDynamicKeys() {
  try {
    yield put(startLoading());
    const response = yield axios.get("/dynamic-keys");
    yield put(getDynamicKeysSuccess(response.data));
  } catch (error) {
    yield put(getDynamicKeysFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

//All Offers User Watcher
function* watchGetAllOffers() {
  yield takeLatest(GET_OFFERS, getAllOffers);
}

//All Blogs User Watcher
function* watchGetAllBlogs() {
  yield takeLatest(GET_BLOGS, getAllBlogs);
}

//All Blogs User Watcher
function* watchGetAllDynamicKeys() {
  yield takeLatest(GET_DYNAMIC_KEYS, getAllDynamicKeys);
}

export default function* dashboardSaga() {
  yield all([
    fork(watchGetAllOffers),
    fork(watchGetAllBlogs),
    fork(watchGetAllDynamicKeys),
  ]);
}
