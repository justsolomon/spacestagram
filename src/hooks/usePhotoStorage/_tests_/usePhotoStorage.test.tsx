import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PhotoStorageTest from "./PhotoStorageTest";

describe("usePhotoStorage hook", () => {
  it("should like and unlike a photo", () => {
    render(<PhotoStorageTest />);

    const likeButton = screen.getByTestId("like-button");
    expect(likeButton).toHaveTextContent("Like");

    userEvent.click(likeButton);
    expect(likeButton).toHaveTextContent("Unlike");

    userEvent.click(likeButton);
    expect(likeButton).toHaveTextContent("Like");
  });
});
