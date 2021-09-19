import { render } from "@testing-library/react";
import MenuButton from "..";

describe("<MenuButton />", () => {
  it("should render the menu button correctly", () => {
    const { asFragment } = render(
      <MenuButton icon={<svg></svg>} onClick={() => {}}>
        Test menu button
      </MenuButton>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
