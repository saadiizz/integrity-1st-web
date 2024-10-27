import produce from "immer";
import { toast } from "react-hot-toast";
import {
  GET_BLOGS_FAILED,
  GET_BLOGS_SUCCESS,
  GET_DYNAMIC_KEYS_FAILED,
  GET_DYNAMIC_KEYS_SUCCESS,
  GET_OFFERS_FAILED,
  GET_OFFERS_SUCCESS,
  START_LOADING,
  STOP_LOADING,
} from "./actionTypes";

const initialState = {
  offers: null,
  blogs: null,
  keys: null,
};

const Offers = produce((state, action) => {
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

    case GET_OFFERS_SUCCESS:
      state.offers = action.payload;
      break;

    case GET_OFFERS_FAILED:
      break;

    case GET_BLOGS_SUCCESS:
      state.blogs = action.payload;
      break;

    case GET_BLOGS_FAILED:
      break;

    case GET_DYNAMIC_KEYS_SUCCESS:
      state.keys = action.payload;
      break;

    case GET_DYNAMIC_KEYS_FAILED:
      break;

    default:
      break;
  }
}, initialState);

export default Offers;
