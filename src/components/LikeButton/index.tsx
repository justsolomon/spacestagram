import { ReactComponent as SolidHeart } from "assets/vectors/heart-filled.svg";
import { ReactComponent as RegularHeart } from "assets/vectors/heart-outline.svg";
import styles from "./likeButton.module.scss";

interface LikeButtonProps {
  /** Boolean prop denoting whether a photo is liked or not */
  liked: boolean | void;

  /** Function to like/unlike a photo */
  toggleLike: () => void;
}

const LikeButton = ({ liked, toggleLike }: LikeButtonProps) => {
  return (
    <button
      aria-label={`${liked ? "Unlike" : "Like"} photo`}
      aria-pressed={liked ? "true" : "false"}
      className={`${styles["like-button"]} ${
        liked ? styles["like-button--active"] : ""
      }`}
      onClick={toggleLike}
    >
      {liked ? <SolidHeart /> : <RegularHeart />}
    </button>
  );
};

export default LikeButton;
