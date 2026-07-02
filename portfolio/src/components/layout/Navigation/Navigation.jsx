import { NavLink } from "react-router-dom";
import navigation from "../../../data/navigation";
import "./Navigation.scss";

const Navigation = ({ menuOpen, closeMenu }) => {
  return (
    <nav className={`navigation ${menuOpen ? "show" : ""}`}>
      <ul>
        {navigation.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
