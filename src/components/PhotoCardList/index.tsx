import Spinner from "components/global/Spinner";
import PhotoCard from "components/PhotoCard";
import { Photo } from "types/photo";
import styles from "./photoCardList.module.scss";

interface PhotoCardListProps {
  /** List of Mars Rover photos */
  photos: Photo[];

  hasNextPage: boolean;
  toggleLike: (id: number) => void;
  loaderRef: (node?: Element | null) => void;
}

const PhotoCardList = ({
  photos,
  hasNextPage,
  toggleLike,
  loaderRef,
}: PhotoCardListProps) => {
  return (
    <>
      <ul className={styles["photo-list"]}>
        {photos.map((photo) => (
          <PhotoCard photo={photo} toggleLike={toggleLike} />
        ))}
      </ul>
      {hasNextPage ? (
        <div ref={loaderRef}>
          <Spinner />
        </div>
      ) : null}
    </>
  );
};

export default PhotoCardList;
