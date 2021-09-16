import { Action, DefaultReducer } from "redux/types";
import { Photo } from "types/photo";
import {
  FETCH_PHOTOS_FAILURE,
  FETCH_PHOTOS_LOADING,
  FETCH_PHOTOS_SUCCESS,
} from "./photoTypes";

const initialState: DefaultReducer<Photo[]> = {
  loading: false,
  success: false,
  data: [],
  page: 1,
  hasNextPage: true,
  error: "",
};

const photoReducer = (
  state = initialState,
  action: Action<Photo[] | string>,
): DefaultReducer<Photo[]> => {
  switch (action.type) {
    case FETCH_PHOTOS_LOADING:
      return {
        ...state,
        error: "",
        hasNextPage: true,
        loading: true,
      };
    case FETCH_PHOTOS_SUCCESS:
      const newPhotos = action.payload as Photo[];
      return {
        ...initialState,
        success: true,
        page: newPhotos.length ? ++state.page : state.page,
        hasNextPage: Boolean(newPhotos.length),
        data: [...state.data, ...newPhotos],
      };
    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        hasNextPage: false,
        error: action.payload as string,
      };
    default:
      return state;
  }
};

export default photoReducer;
