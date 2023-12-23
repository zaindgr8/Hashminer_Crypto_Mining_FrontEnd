import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ColorContext } from "./ColorContext/darkContext";
import Home from "./Home/Home";
import Login from "./Login/Login";
import ProfileUser from "./ProfileUser/ProfileUser";
import Form from "./Form/form";
import Withdraw from "./Form_Withdraw/form_withdraw";
import "./app.scss";
import Setting from "./Setting/Pass_Setting";
import Wallet from "./Setting/Wallet_Setting";
import ReferralForm from "./Referal/Referral";
import Ticket from "./Ticket/Ticket";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

// Dynamicaly change the data for different pages(replaceable)

function App() {
  const location = useLocation();
  const [cookies, setCookie] = useCookies(["token"]);
  const { user } = location.state || {};
  const [userPackages, setUserPackages] = useState([]);

  useEffect(() => {
    // Function to get the token from local storage
    const getAuthToken = () => {
      return localStorage.getItem("apiToken");
    };

    // Function to decode the token
    const decodeToken = (token) => {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error("Error decoding token:", error.message);
        return null;
      }
    };

    // Get the token from local storage
    const token = getAuthToken();

    if (token) {
      // Decode the token
      const decoded = decodeToken(token);

      // Make an API call with the token in the headers
      axios
        .get("http://localhost:3000/packages/user_packages", {
          headers: {
            Authorization: token,
            "Content-Type": "application/json", // Adjust content type as needed
          },
        })
        .then((response) => {
          // Handle the response from the server
          console.log("API Response:", response.data);
          setUserPackages((prev) => [...prev, ...response.data]);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error making API call:", error.message);
        });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      {/* <Route path="/pu" element={<ProfileUser />} /> */}
      <Route path="/referral" element={<ReferralForm />} />
      <Route path="/form" element={<Form />} />
      <Route path="/withdraw" element={<Withdraw />} />
      {/* <Route path="/password" element={<Setting />} /> */}
      {/* <Route path="/wallet" element={<Wallet />} /> */}
      <Route path="/ticket" element={<Ticket />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
