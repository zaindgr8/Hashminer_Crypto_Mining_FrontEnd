import "./scss/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Admin from "./pages/admin/Admin";
import Landing from "./pages/Landing";
import User from "./pages/user/User";
//user imports
import ProfileUser from "./pages/user/ProfileUser/ProfileUser";
import ReferralForm from "./pages/user/Referal/Referral";
import Form from "./pages/user/Form/form";
import Withdraw from "./pages/user/Form_Withdraw/form_withdraw";
import Setting from "./pages/user/Setting/Pass_Setting";
import Wallet from "./pages/user/Setting/Wallet_Setting";
import Ticket from "./pages/user/Ticket/Ticket";
//admin imports
import ReferralCodeAdmin from "./pages/admin/Referal/Referral";
import Withdraw_Admin from "./pages/admin/Form_Withdraw/form_withdraw";
import Manage_Investor from "./pages/admin/DataTable/DataTable";
import ChangePass_Admin from "./pages/admin/Setting/Pass_Setting";
import Wallet_Admin from "./pages/admin/Setting/Wallet_Setting";
import Login from "./pages/login/Login";
import Cookies from "js-cookie";
import Register from "./pages/register/Register";
import { useCookies } from "react-cookie";
//LoginSignup imports

function App() {
  const [cookies, setCookie] = useCookies(["token"]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user" element={<User />} />
        <Route path="/succubus" element={<Admin />} />
        <Route path="/pu" element={<ProfileUser />} />
        <Route path="/referral" element={<ReferralForm />} />
        <Route path="/form" element={<Form />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/password" element={<Setting />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/admin_referral" element={<ReferralCodeAdmin />} />
        <Route path="/withdraw_admin" element={<Withdraw_Admin />} />
        <Route path="/manage_investor" element={<Manage_Investor />} />
        <Route path="/passwordSetting_Admin" element={<ChangePass_Admin />} />
        <Route path="/wallet_Admin" element={<Wallet_Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
