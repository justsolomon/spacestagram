import { getErrorMessage } from "..";
import { AxiosError, AxiosResponse } from "axios";

const defaultAxiosError: AxiosError = {
  config: {},
  response: {
    data: { errors: "An error occurred" },
    status: 400,
    statusText: "Error",
    headers: {},
    config: {},
  },
  message: "Network error",
  name: "",
  isAxiosError: false,
  toJSON: () => ({ errors: "An error occurred" }),
};

describe("getErrorMessage util", () => {
  it("should return the external API error message", () => {
    let error = Object.assign({}, defaultAxiosError);

    let errorMessage = getErrorMessage(error);
    expect(errorMessage).toBe("An error occurred");

    (error.response as AxiosResponse).data = {
      error: {
        message: "Server crashed",
      },
    };

    errorMessage = getErrorMessage(error);
    expect(errorMessage).toBe("Server crashed");
  });
  it("should return the axios error message", () => {
    let error = Object.assign({}, defaultAxiosError);

    delete error.response;
    const errorMessage = getErrorMessage(error);

    expect(errorMessage).toBe("Network error");
  });
});
