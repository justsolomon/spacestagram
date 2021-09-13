import { Photo } from "types/photo";
import LikeButton from "components/LikeButton";
import styles from "./photoCard.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ShareButton from "components/ShareButton";

interface PhotoCardProps {
  /** Mars Rover photo information */
  photo: Photo;

  toggleLike: (id: number) => void;
}

const PhotoCard = ({ photo, toggleLike }: PhotoCardProps) => {
  const title = `${photo.rover.name} rover - ${photo.camera.full_name}`;

  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <li className={styles["photo-card"]} ref={ref}>
      <img
        src={inView ? photo.img_src : ""}
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
          <ShareButton />
          <LikeButton
            liked={photo.liked}
            toggleLike={() => toggleLike(photo.id)}
          />
        </div>
      </div>
    </li>
  );
};

export default PhotoCard;
