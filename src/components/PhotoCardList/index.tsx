import Spinner from "components/global/Spinner";
import PhotoCard from "components/PhotoCard";
import { Photo } from "types/photo";
import styles from "./photoCardList.module.scss";

interface PhotoCardListProps {
  /** List of Mars Rover photos */
  photos: Photo[];

  hasNextPage: boolean;

  /** Ref for tracking whether the loader/spinner is in view or not */
  loaderRef: (node?: Element | null) => void;
}

const PhotoCardList = ({
  photos,
  hasNextPage,
  loaderRef,
}: PhotoCardListProps) => {
  const photosAvailable = hasNextPage && photos.length;

  return (
    <>
      {photosAvailable ? (
        <ul className={styles["photo-list"]} data-testid="photo-list">
          {photos.map((photo) => (
            <PhotoCard photo={photo} key={photo.id} />
          ))}
        </ul>
      ) : (
        <p className={styles["no-photos"]} data-testid="no-photos">
          There are no photos available
        </p>
      )}

      {hasNextPage ? (
        <div ref={loaderRef} data-testid="spinner">
          <Spinner />
        </div>
      ) : null}
    </>
  );
};

export default PhotoCardList;
