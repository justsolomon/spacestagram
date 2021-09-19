import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuTestComponent from "./MenuTestComponent";

const renderMenu = (isOpen: boolean) => {
  return render(<MenuTestComponent isOpen={isOpen} />);
};

describe("<Menu />", () => {
  it("should show the menu on menu button click", () => {
    renderMenu(false);

    const openMenuButton = screen
      .getByTestId("menu__button-container")
      .querySelector("button");
    const menu = screen.queryByTestId("menu");
    const menuContent = screen.queryByTestId("menu__content");

    expect(menu).not.toHaveClass("menu--visible");
    userEvent.click(openMenuButton as HTMLButtonElement);

    expect(menu).toHaveClass("menu--visible");
    expect(menuContent).toHaveTextContent("Menu content");
  });
  it("should hide the menu on click outside", () => {
    renderMenu(true);

    const menu = screen.queryByTestId("menu");
    const menuContent = screen.queryByTestId("menu__content");

    expect(menu).toHaveClass("menu--visible");
    expect(menuContent).toHaveTextContent("Menu content");

    userEvent.click(screen.getByTestId("menu__overlay"));

    expect(menu).not.toHaveClass("menu--visible");
  });
  it("should hide the menu on escape key pressed", () => {
    renderMenu(true);

    const menu = screen.queryByTestId("menu");
    const menuContent = screen.queryByTestId("menu__content");

    expect(menu).toHaveClass("menu--visible");
    expect(menuContent).toHaveTextContent("Menu content");

    const menuOverlay = screen.getByTestId("menu__overlay");
    fireEvent.keyDown(menuOverlay, {
      key: "Escape",
      code: "Escape",
    });

    expect(menu).not.toHaveClass("menu--visible");
  });
});
