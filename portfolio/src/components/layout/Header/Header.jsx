import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Hamburger from "./Hamburger";
import useHeader from "./useHeader";
import useMediaQuery from "../../../hooks/useMediaQuery";
import "./Header.scss";

const Header = () => {
  const { menuOpen, toggleMenu, closeMenu, scrolled } = useHeader();

  const isMobileOrTablet = useMediaQuery("(max-width: 1023px)");

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          &lt;LengvasKodas /&gt;
        </NavLink>

        <Navigation menuOpen={menuOpen} closeMenu={closeMenu} />

        {isMobileOrTablet && (
          <Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;
