import { useInView } from "react-intersection-observer";
import { Photo } from "types/photo";
import PhotoCardList from "..";

interface PhotoCardListTestProps {
  hasNextPage: boolean;
  photos: Photo[];
}

const PhotoCardListTest = ({ hasNextPage, photos }: PhotoCardListTestProps) => {
  const { ref } = useInView();

  return (
    <PhotoCardList hasNextPage={hasNextPage} photos={photos} loaderRef={ref} />
  );
};

export default PhotoCardListTest;
