import "./Navigation.scss";

const Navigation = ({ MenuOpen }) => {
  return (
    <nav className={`navigation ${MenuOpen ? "show" : ""}`}>
      <ul>
        <li>
          <a href="#hero">Pradžia</a>
        </li>
        <li>
          <a href="#about">Apie</a>
        </li>
        <li>
          <a href="#skills">Įgūdžiai</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Paslaugos</a>
        </li>
        <li>
          <a href="#contact">Kontaktai</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
