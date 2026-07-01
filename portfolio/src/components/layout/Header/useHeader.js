import { useState } from "react";

const useHeader = () => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return { MenuOpen, toggleMenu };
};

export default useHeader;
