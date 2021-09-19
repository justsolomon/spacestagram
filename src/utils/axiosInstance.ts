import axios from "axios";

// Creates a base instance for all axios based request
const axiosInstance = axios.create({
  baseURL: `https://api.nasa.gov/mars-photos/api/v1`,
});

axiosInstance.interceptors.request.use((config) => {
  //add api key to query params
  config.params["api_key"] = process.env.REACT_APP_NASA_API_KEY;

  return config;
});

export default axiosInstance;
