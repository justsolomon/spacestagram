import { Photo } from "types/photo";
import LikeButton from "components/LikeButton";
import styles from "./photoCard.module.scss";
import { useInView } from "react-intersection-observer";
import ShareMenu from "components/ShareMenu";
import PlaceholderImage from "assets/images/placeholder.jpeg";
import usePhotoStorage from "hooks/usePhotoStorage";

interface PhotoCardProps {
  /** Mars Rover photo information */
  photo: Photo;
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });
  const { isLiked, toggleLike } = usePhotoStorage(photo.id);

  const title = `${photo.rover.name} rover - ${photo.camera.full_name}`;

  return (
    <li className={styles["photo-card"]} ref={ref} data-testid="photo-card">
      <img
        src={inView ? photo.img_src : PlaceholderImage}
        alt={title}
        loading="lazy"
        className={styles["photo-card__image"]}
      />
      <div className={styles["photo-card__section"]}>
        <div className={styles["photo-card__details"]}>
          <p className={styles["photo-card__title"]}>{title}</p>
          <p className={styles["photo-card__date"]}>{photo.earth_date}</p>
        </div>
        <div className={styles["photo-card__action-buttons"]}>
          <ShareMenu
            rover={photo.rover.name}
            camera={photo.camera.full_name}
            imageSrc={photo.img_src}
          />
          <LikeButton liked={isLiked} title={title} toggleLike={toggleLike} />
        </div>
      </div>
    </li>
  );
};

export default PhotoCard;
