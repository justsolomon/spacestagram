import { render, screen } from "@testing-library/react";
import ErrorMessage from "..";

describe("<ErrorMessage />", () => {
  it("should render the error message component correctly", () => {
    const { asFragment } = render(
      <ErrorMessage error="An error occurred" retryRequest={() => {}} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render a default message for network errors", () => {
    render(<ErrorMessage error="Network Error" retryRequest={() => {}} />);

    const description = screen.queryByTestId("error-message__description");

    expect(description).toHaveTextContent(
      "Looks like you lost your connection. Please check it and try again",
    );
  });
});
