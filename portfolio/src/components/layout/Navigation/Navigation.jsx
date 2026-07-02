import navigation from "../../../data/navigation";
import "./Navigation.scss";

const Navigation = ({ menuOpen, activeSection, closeMenu }) => {
  return (
    <nav className={`navigation ${menuOpen ? "show" : ""}`}>
      <ul>
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={closeMenu}
            >
              {item.lable}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
