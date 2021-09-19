import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShareMenu from "..";

describe("<ShareMenu />", () => {
  beforeAll(() => {});

  it("should render only the share button if menu is closed and navigator exists", () => {
    render(
      <ShareMenu
        rover="Test rover"
        camera="Test camera"
        imageSrc="https://example.com/test.png"
      />,
    );

    const menuButton = screen.queryByTestId("share-menu__button");
    if (
      typeof navigator.share !== "undefined" ||
      typeof navigator.clipboard !== "undefined"
    ) {
      expect(menuButton).toBeInTheDocument();
      expect(menuButton).toHaveAttribute("aria-pressed", "false");
    }
  });
  it("should render the buttons if navigator is defined", () => {
    render(
      <ShareMenu
        rover="Test rover"
        camera="Test camera"
        imageSrc="https://example.com/test.png"
      />,
    );

    const menuButton = screen.queryByTestId("share-menu__button");
    if (
      typeof navigator.share !== "undefined" &&
      typeof navigator.clipboard !== "undefined"
    ) {
      userEvent.click(menuButton as HTMLElement);

      expect(menuButton?.querySelectorAll("li")).toHaveLength(2);
    }
  });
});
