import { ReactComponent as SolidHeart } from "assets/heart-filled.svg";
import { ReactComponent as RegularHeart } from "assets/heart-outline.svg";
import { useState } from "react";
import styles from "./shareButton.module.scss";

const ShareButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <button
      aria-label="Open share options menu"
      aria-pressed={menuOpen}
      className={styles["like-button"]}
    >
      {menuOpen ? <SolidHeart /> : <RegularHeart />}
    </button>
  );
};

export default ShareButton;
