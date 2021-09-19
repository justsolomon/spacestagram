import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import PhotoCard from "..";
import { intersectionMockInstance } from "react-intersection-observer/test-utils";

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

describe("<PhotoCard />", () => {
  it("should render the photo card correctly", () => {
    const { asFragment } = render(<PhotoCard photo={photo} />);

    //mock intersection observer
    act(() => {
      intersectionMockInstance(screen.getByTestId("photo-card"));
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
