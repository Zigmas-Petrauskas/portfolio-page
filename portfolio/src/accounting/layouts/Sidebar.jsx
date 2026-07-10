import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      

      <nav className="sidebar-menu">
        <NavLink to="/accounting">Apskaita</NavLink>

        <NavLink to="/accounting/clients">Klientai</NavLink>
        <NavLink to="/accounting/invoices">Sąskaitos</NavLink>
        <NavLink to="/accounting/expences">Išlaidos</NavLink>
        <NavLink to="/accounting/reports">Ataskaitos</NavLink>
        <NavLink to="/accounting/settings">Nustatymai</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
