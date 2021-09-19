import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { intersectionMockInstance } from "react-intersection-observer/test-utils";
import { Photo } from "types/photo";
import PhotoCardListTest from "./PhotoCardListTest";

describe("<PhotoCardList />", () => {
  it("should render a paragraph if there are no photos", () => {
    render(<PhotoCardListTest hasNextPage={false} photos={[]} />);

    const noPhotos = screen.queryByTestId("no-photos");
    const photoCardList = screen.queryByTestId("photo-list");
    const spinner = screen.queryByTestId("spinner");

    expect(spinner).not.toBeInTheDocument();
    expect(photoCardList).not.toBeInTheDocument();
    expect(noPhotos).toBeInTheDocument();
    expect(noPhotos).toHaveTextContent("There are no photos available");
  });
  it("should show the spinner if there's a next page available", () => {
    render(<PhotoCardListTest hasNextPage={true} photos={[]} />);

    const noPhotos = screen.queryByTestId("no-photos");
    const photoCardList = screen.queryByTestId("photo-list");
    const spinner = screen.queryByTestId("spinner");

    //mock intersection observer
    act(() => {
      intersectionMockInstance(spinner as HTMLElement);
    });

    expect(noPhotos).not.toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
    expect(photoCardList).toBeInTheDocument();
  });
  it("should render a list of 10 photos after fetching data", async () => {
    const photos = await fetchPhotos();

    render(<PhotoCardListTest hasNextPage={true} photos={photos} />);

    const noPhotos = screen.queryByTestId("no-photos");
    const photoCardList = screen.queryByTestId("photo-list");
    const spinner = screen.queryByTestId("spinner");

    expect(noPhotos).not.toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
    expect(photoCardList).toBeInTheDocument();
    expect(photoCardList?.querySelectorAll(".photo-card")).toHaveLength(10);
  });
});

//mock api response
const fetchPhotos = (): Promise<Photo[]> => {
  const photo = {
    id: 424926,
    sol: 1000,
    camera: { id: 22, name: "MAST", rover_id: 5, full_name: "Mast Camera" },
    img_src:
      "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631200305217E01_DXXX.jpg",
    earth_date: "2015-05-30",
    rover: {
      id: 5,
      name: "Curiosity",
      landing_date: "2012-08-06",
      launch_date: "2011-11-26",
      status: "active",
    },
  };

  const photosResponse = Array(10)
    .fill(photo)
    .map((photo) => {
      return {
        ...photo,
        id: photo.id + Math.round(Math.random() * 100 + 1),
      };
    });

  return Promise.resolve(photosResponse);
};
