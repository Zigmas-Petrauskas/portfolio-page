import { NavLink, Outlet } from "react-router-dom";

import PageHeader from "../../components/common/PageHeader/PageHeader";

import "./Settings.scss";

const Settings = () => {
  return (
    <section className="settings">
      <PageHeader
        title="Nustatymai"
        description="Sistemos ir įmonės nustatymai"
      />

      <nav className="settings-menu">
        <NavLink to="users">Vartotojai</NavLink>
      </nav>

      <Outlet />
    </section>
  );
};

export default Settings;
