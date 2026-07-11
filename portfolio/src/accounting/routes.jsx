import { Route } from "react-router-dom";

import AccountingLayout from "./layouts/AccountingLayout";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Users from "./pages/Settings/Users/Users";

const AccountingRoutes = (
  <Route path="/accounting" element={<AccountingLayout />}>
    <Route path="login" element={<Login />} />

    <Route path="register" element={<Register />} />

    <Route path="settings" element={<Settings />}>
      <Route path="users" element={<Users />} />
    </Route>
  </Route>
);

export default AccountingRoutes;
