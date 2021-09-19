import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LikeButtonTest from "./LikeButtonTest";

describe("<LikeButton />", () => {
  it("should render the like button properly", () => {
    const { asFragment } = render(<LikeButtonTest />);

    expect(asFragment).toMatchSnapshot();
  });
  it("should like and unlike an item", () => {
    render(<LikeButtonTest />);

    const likeButton = screen.getByTestId("like-button");
    expect(likeButton).toHaveAccessibleName("Like test photo");
    expect(likeButton).not.toHaveClass("like-button--active");

    userEvent.click(likeButton);
    expect(likeButton).toHaveAccessibleName("Unlike test photo");
    expect(likeButton).toHaveClass("like-button--active");

    userEvent.click(likeButton);
    expect(likeButton).toHaveAccessibleName("Like test photo");
    expect(likeButton).not.toHaveClass("like-button--active");
  });
});
