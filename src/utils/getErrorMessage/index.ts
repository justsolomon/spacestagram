import { AxiosError } from "axios";

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
