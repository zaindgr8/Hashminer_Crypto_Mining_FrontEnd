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
 <></>
  );
}

export default App;
