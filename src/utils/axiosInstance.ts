import axios, { AxiosError } from "axios";

// Creates a base instance for all axios based request
const axiosInstance = axios.create({
  baseURL: `https://api.nasa.gov/mars-photos/api/v1`,
});

axiosInstance.interceptors.request.use((config) => {
  //add api key to query params
  config.params["api_key"] = process.env.REACT_APP_NASA_API_KEY;

  return config;
});

/**
 * Takes an axios error object and returns the error message
 * @param error axios error object
 * @returns axios or API error message
 */
export const getErrorMessage = (error: AxiosError): string => {
  return error.response
    ? error.response.data.errors || error.response.data.error.message
    : error.message;
};

export default axiosInstance;
