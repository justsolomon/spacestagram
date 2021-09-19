import { render } from "@testing-library/react";
import Header from "..";

describe("<Header />", () => {
  it("should render the header content correctly", () => {
    const { asFragment } = render(<Header />);

    expect(asFragment).toMatchSnapshot();
  });
});
