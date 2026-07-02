import Navigation from "../Navigation/Navigation";
import Hamburger from "./Hamburger";
import useHeader from "./useHeader";
import useMediaQuery from "../../../hooks/useMediaQuery";
import "./Header.scss";

const Header = () => {
  const { menuOpen, toggleMenu, closeMenu, activeSection, scrolled } =
    useHeader();

  const isMobileOrTablet = useMediaQuery("(max-width: 1023px)");

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#hero" className="logo">
          &lt;LengvasKodas /&gt;
        </a>

        <Navigation
          menuOpen={menuOpen}
          activeSection={activeSection}
          closeMenu={closeMenu}
        />
        {/* Rodomas tik moile + tablet */}
        {isMobileOrTablet && (
          <Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;
