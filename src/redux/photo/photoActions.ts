import { Action } from "redux/types";
import { Photo } from "types/photo";
import {
  FETCH_PHOTOS_FAILURE,
  FETCH_PHOTOS_LOADING,
  FETCH_PHOTOS_SUCCESS,
} from "./photoTypes";

export const fetchPhotosLoading = (): Action => ({
  type: FETCH_PHOTOS_LOADING,
});

export const fetchPhotosSuccess = (photos: Photo[]): Action<Photo[]> => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: photos,
});

export const fetchPhotosFailure = (error: string): Action<string> => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: error,
});
