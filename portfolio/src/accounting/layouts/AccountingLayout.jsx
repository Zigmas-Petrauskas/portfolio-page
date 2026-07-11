import { Outlet } from "react-router-dom";
import PageHeader from "../components/common/PageHeader/PageHeader";
import Sidebar from "./Sidebar";
import "./AccountingLayout.scss";

const AccountingLayout = () => {
  return (
    <div className="accounting-layout">
      <PageHeader
        title="MB Lengvas kodas - apskaita"
        description="Pagrindinis apskaitos sistemos skydelis"
      />

      <div className="accounting-body">
        <Sidebar />

        <main className="accounting-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AccountingLayout;
