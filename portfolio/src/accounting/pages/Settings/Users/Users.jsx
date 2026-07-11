import PageHeader from "../../../components/common/PageHeader/PageHeader";

import "./Users.scss";

const Users = () => {
  return (
    <section className="users">
      <PageHeader title="Vartotojai" description="Įmonės vartotojų valdymas" />

      <div className="users-content">Vartotojų sąrašas bus čia</div>
    </section>
  );
};

export default Users;
