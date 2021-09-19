import { useState } from "react";
import Menu from "..";

interface MenuTestProps {
  isOpen: boolean;
}

const MenuTestComponent = ({ isOpen }: MenuTestProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(isOpen);

  return (
    <Menu
      isOpen={menuOpen}
      button={<button onClick={() => setMenuOpen(true)}>Open Menu</button>}
      onClose={() => setMenuOpen(false)}
    >
      Menu content
    </Menu>
  );
};

export default MenuTestComponent;
