import { useEffect, useRef } from "react";
import styles from "./menu.module.scss";

interface MenuProps {
  /** Boolean status that determines the visibility of the menu */
  isOpen: boolean;

  /** Button component for opening the menu */
  button: React.ReactNode;

  /** Classname to apply to button to override default styles */
  className?: string;

  /** Function to close the menu */
  onClose: () => void;

  children: React.ReactNode;
}

function Menu({
  children,
  isOpen,
  button,
  className = "",
  onClose,
}: MenuProps) {
  const menuRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        onClose();
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuRef, onClose]);

  return (
    <div className={className}>
      <div
        className={`${styles["menu__button"]} ${
          isOpen ? styles["menu__button--active"] : ""
        }`}
      >
        {button}
      </div>
      <div
        className={`${styles["menu"]} ${isOpen ? styles["menu--visible"] : ""}`}
        onClick={onClose}
      >
        <div className={styles["menu__overlay"]}></div>
        <div
          className={styles["menu__content"]}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Menu;
