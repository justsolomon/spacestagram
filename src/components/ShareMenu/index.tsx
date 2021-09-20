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
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const title = `${rover} rover - ${camera}`;

  const sharePhoto = () => {
    navigator
      .share({
        title,
        text: `Check out this photo taken on the ${rover} rover using the ${camera}`,
        url: imageSrc,
      })
      .then(() => setMenuOpen(false))
      .catch(() => setMenuOpen(false));
  };

  const copyPhoto = () => {
    navigator.clipboard
      .writeText(imageSrc)
      .then(() => {
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch(() => setMenuOpen(false));
  };

  const hasShare = typeof navigator.share !== "undefined";
  const hasClipboard = typeof navigator.clipboard !== "undefined";

  return !(hasShare || hasClipboard) ? null : (
    <Menu
      isOpen={menuOpen}
      onClose={() => setMenuOpen(false)}
      button={
        <button
          aria-label={`Open share options menu for ${title} photo`}
          aria-pressed={menuOpen}
          className={styles["share-menu__button"]}
          data-testid="share-menu__button"
          onClick={() => setMenuOpen(true)}
        >
          <ShareIcon />
        </button>
      }
    >
      <ul className={styles["share-menu__menu-buttons"]}>
        {hasShare ? (
          <li data-testid="share-menu__share-button">
            <MenuButton icon={<ShareAltIcon />} onClick={sharePhoto}>
              Share photo via...
            </MenuButton>
          </li>
        ) : null}
        {hasClipboard ? (
          <li data-testid="share-menu__copy-button">
            <MenuButton icon={<LinkCopyIcon />} onClick={copyPhoto}>
              {isCopied ? "Copied!" : "Copy link to photo"}
            </MenuButton>
          </li>
        ) : null}
      </ul>
    </Menu>
  );
};

export default ShareMenu;
