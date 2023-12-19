import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import ProtectedPage from "./ProtectedPage";
import ReferralCodeAdmin from "./pages/admin/Referal/Referral";
import Withdraw_Admin from "./pages/admin/Form_Withdraw/form_withdraw";
import Manage_Investor from "./pages/admin/DataTable/DataTable";
import ChangePass_Admin from "./pages/admin/Setting/Pass_Setting";
import Wallet_Admin from "./pages/admin/Setting/Wallet_Setting";
// import Cookies from "js-cookie";
import Admin from "./pages/admin/Admin";
import Landing from "./pages/Landing";
import User from "./pages/user/User";
import ProfileUser from "./pages/user/ProfileUser/ProfileUser";
import ReferralForm from "./pages/user/Referal/Referral";
import Form from "./pages/user/Form/form";
import Withdraw from "./pages/user/Form_Withdraw/form_withdraw";
import Setting from "./pages/user/Setting/Pass_Setting";
import Wallet from "./pages/user/Setting/Wallet_Setting";
import Ticket from "./pages/user/Ticket/Ticket";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById("root"));

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <>
      <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={(to) => navigate(to)}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
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
          <Route path="/user" element={<User />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* <Route path="/" element={<App />} /> */}
          <Route
            path="/sign-in/*"
            element={
              <SignIn
                redirectUrl={"/protected"}
                routing="path"
                path="/sign-in"
              />
            }
          />

          <Route
            path="/sign-up/*"
            element={
              <SignUp
                redirectUrl={"/protected"}
                routing="path"
                path="/sign-up"
              />
            }
          />
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  {/* <ProtectedPage /> */}
                  {/* <User /> */}
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </ClerkProvider>
      ;
    </>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes />
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
