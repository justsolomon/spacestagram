import { render } from "@testing-library/react";
import Layout from "..";

describe("<Layout />", () => {
  it("should render the main layout content correctly", () => {
    const { asFragment } = render(<Layout children="Content here" />);

    expect(asFragment).toMatchSnapshot();
  });
});
