import { ReactComponent as SolidHeart } from "assets/vectors/heart-filled.svg";
import { ReactComponent as RegularHeart } from "assets/vectors/heart-outline.svg";
import { useState } from "react";
import styles from "./likeButton.module.scss";

interface LikeButtonProps {
  /** Boolean prop denoting whether a photo is liked or not */
  liked: boolean | void;

  /** Title of the photo */
  title: string;

  /** Function to like/unlike a photo */
  toggleLike: () => void;
}

const LikeButton = ({ liked, title, toggleLike }: LikeButtonProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <button
      aria-label={`${liked ? "Unlike" : "Like"} ${title} photo`}
      aria-pressed={liked ? "true" : "false"}
      className={`${styles["like-button"]} ${
        isActive ? styles["like-button--active"] : ""
      }`}
      data-testid="like-button"
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
