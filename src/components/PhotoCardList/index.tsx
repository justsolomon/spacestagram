import Spinner from "components/global/Spinner";
import PhotoCard from "components/PhotoCard";
import { Photo } from "types/photo";
import styles from "./photoCardList.module.scss";

interface PhotoCardListProps {
  /** List of Mars Rover photos */
  photos: Photo[];

  hasNextPage: boolean;

  /** Ref for tracking whether the loader is in view or not */
  loaderRef: (node?: Element | null) => void;
}

const PhotoCardList = ({
  photos,
  hasNextPage,
  loaderRef,
}: PhotoCardListProps) => {
  return (
    <>
      {!hasNextPage && !photos.length ? (
        <p className={styles["no-photos"]}>There are no photos available</p>
      ) : (
        <ul className={styles["photo-list"]}>
          {photos.map((photo) => (
            <PhotoCard photo={photo} />
          ))}
        </ul>
      )}
      {hasNextPage ? (
        <div ref={loaderRef}>
          <Spinner />
        </div>
      ) : null}
    </>
  );
};

export default PhotoCardList;
