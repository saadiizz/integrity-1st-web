import { combineReducers } from "redux";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// Front
// import Layout from './layout/reducer';

// Authentication Module
import auth from "./auth/reducer";
import dashboard from "./dashboard/reducer";
import garage from "./garage/reducer";
import appointments from "./appointments/reducer";

// import persistReducer from 'redux-persist/es/pesistReducer';
// import AuthReducer

// const authPersistConfig = {
//     key: 'auth',
//     storage: storage,
//     keyPrefix: 'redux-',
//     whitelist: ['auth']
//   };

const rootReducer = () =>
  combineReducers({
    auth,
    dashboard,
    garage,
    appointments
  });

export default rootReducer;
