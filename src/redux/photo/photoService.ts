import { Dispatch } from "redux";
import axios from "utils/axiosInstance";
import getErrorMessage from "utils/getErrorMessage";
import {
  fetchPhotosFailure,
  fetchPhotosLoading,
  fetchPhotosSuccess,
} from "./photoActions";

const fetchPhotos = (page: number): ((dispatch: Dispatch) => void) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchPhotosLoading());

    axios
      .get("/rovers/curiosity/photos", {
        params: { sol: 1000, page },
      })
      .then((res) => {
        dispatch(fetchPhotosSuccess(res.data.photos));
      })
      .catch((err) => {
        dispatch(fetchPhotosFailure(getErrorMessage(err)));
      });
  };
};

export default fetchPhotos;
