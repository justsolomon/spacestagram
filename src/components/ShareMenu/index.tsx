import { ReactComponent as ShareIcon } from "assets/vectors/share.svg";
import { ReactComponent as LinkCopyIcon } from "assets/vectors/link.svg";
import { ReactComponent as ShareAltIcon } from "assets/vectors/share-alt.svg";
import Menu from "components/global/Menu";
import MenuButton from "components/global/Menu/subcomponents/MenuButton";
import { useState } from "react";
import styles from "./shareMenu.module.scss";

interface ShareMenuProps {
  /** Name of the rover the photo was taken from */
  rover: string;

  /** Name of the camera used to take the photo */
  camera: string;

  /** Image src of the photo */
  imageSrc: string;
}

const ShareMenu = ({ rover, camera, imageSrc }: ShareMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sharePost = () => {
    navigator
      .share({
        title: `${rover} rover - ${camera}`,
        text: `Check out this photo taken on the ${rover} rover using the ${camera}`,
        url: imageSrc,
      })
      .then(() => setMenuOpen(false))
      .catch(() => setMenuOpen(false));
  };

  return (
    <Menu
      isOpen={menuOpen}
      onClose={() => setMenuOpen(false)}
      button={
        <button
          aria-label="Open share options menu"
          aria-pressed={menuOpen}
          className={styles["share-menu__button"]}
          onClick={() => setMenuOpen(true)}
        >
          <ShareIcon />
        </button>
      }
    >
      <ul className={styles["share-menu__menu-buttons"]}>
        {typeof navigator.share !== "undefined" ? (
          <li>
            <MenuButton icon={<ShareAltIcon />} onClick={() => sharePost()}>
              Share photo via...
            </MenuButton>
          </li>
        ) : null}
        <li>
          <MenuButton
            icon={<LinkCopyIcon />}
            onClick={() => {
              navigator.clipboard
                .writeText(imageSrc)
                .then(() => setMenuOpen(false))
                .catch(() => setMenuOpen(false));
            }}
          >
            Copy link to photo
          </MenuButton>
        </li>
      </ul>
    </Menu>
  );
};

export default ShareMenu;
