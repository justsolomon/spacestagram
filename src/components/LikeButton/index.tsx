import { ReactComponent as SolidHeart } from "assets/vectors/heart-filled.svg";
import { ReactComponent as RegularHeart } from "assets/vectors/heart-outline.svg";
import { useState } from "react";
import styles from "./likeButton.module.scss";

interface LikeButtonProps {
  /** Boolean prop denoting whether a photo is liked or not */
  liked: boolean | void;

  /** Function to like/unlike a photo */
  toggleLike: () => void;
}

const LikeButton = ({ liked, toggleLike }: LikeButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      aria-label={`${liked ? "Unlike" : "Like"} photo`}
      aria-pressed={liked ? "true" : "false"}
      className={`${styles["like-button"]} ${
        isActive ? styles["like-button--active"] : ""
      }`}
      onClick={() => {
        setIsActive(!liked);
        toggleLike();
      }}
    >
      {liked ? <SolidHeart /> : <RegularHeart />}
    </button>
  );
};

export default LikeButton;
