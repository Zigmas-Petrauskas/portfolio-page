import { Route } from "react-router-dom";
import AccountingLayout from "./layouts/AccountingLayout";

const AccountingRoutes = (
  <Route path="/accounting" element={<AccountingLayout />}></Route>
);

export default AccountingRoutes;
