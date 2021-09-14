import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <h1 className={styles["header__title"]}>Spacestagram</h1>
      <p className={styles["header__attribution"]}>
        Brought to you by NASA's Mars Rover Photos API
      </p>
    </header>
  );
};

export default Header;
