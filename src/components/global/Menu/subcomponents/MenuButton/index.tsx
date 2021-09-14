import styles from "./menuButton.module.scss";

interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Left icon for the menu button */
  icon: React.ReactNode;

  children: React.ReactNode;
  onClick: React.MouseEventHandler;
}

const MenuButton = ({ icon, children, onClick, ...rest }: MenuButtonProps) => {
  return (
    <button onClick={onClick} className={styles["menu-button"]} {...rest}>
      {icon}
      {children}
    </button>
  );
};

export default MenuButton;
