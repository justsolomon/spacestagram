import { ReactComponent as SolidHeart } from "assets/heart-filled.svg";
import { ReactComponent as RegularHeart } from "assets/heart-outline.svg";
import styles from "./likeButton.module.scss";

interface LikeButtonProps {
  /** Boolean prop denoting whether a photo is liked or not */
  liked: boolean | void;

  toggleLike: () => void;
}

const LikeButton = ({ liked, toggleLike }: LikeButtonProps) => {
  return (
    <button
      aria-label={`${liked ? "Unlike" : "Like"} image`}
      aria-pressed={liked ? "true" : "false"}
      className={styles["like-button"]}
      onClick={toggleLike}
    >
      {liked ? <SolidHeart /> : <RegularHeart />}
    </button>
  );
};

export default LikeButton;
