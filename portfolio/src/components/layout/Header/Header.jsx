import Navigation from "../Navigation/Navigation";
import useHeader from "./useHeader";
import "./Header.scss";

const Header = () => {
  const { MenuOpen, toggleMenu } = useHeader();

  return (
    <header className="header">
      <div className="container header-inner">
        <h1 className="logo">&lt;LengvasKodas /&gt;</h1>

        <Navigation MenuOpen={MenuOpen} />

        <button className="menu-btn" onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
