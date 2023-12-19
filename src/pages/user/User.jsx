import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ColorContext } from "./ColorContext/darkContext";
import Home from "./Home/Home";
import Orders from "./Orders/Orders";
import AddNew from "./AddNew/AddNew";
import BlogDetail from "./BlogDetail/BlogDetail";
import Blogs from "./Blogs/Blogs";
import Detail from "./Detail/Detail";
import Login from "./Login/Login";
import Lists from "./UserLists/UserLists";
import ProfileUser from "./ProfileUser/ProfileUser";
import Form from "./Form/form";
import Withdraw from "./Form_Withdraw/form_withdraw";
import "./app.scss";
import Setting from "./Setting/Pass_Setting";
import Wallet from "./Setting/Wallet_Setting";
import ReferralForm from "./Referal/Referral";
import Ticket from "./Ticket/Ticket";
import { useCookies } from "react-cookie";
import { useAuth } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";


// Dynamicaly change the data for different pages(replaceable)
const userInpDetails = [
  {
    id: 2,
    name: "username",
    lable: "Username",
    type: "text",
    placeholder: "John23",
    required: true,
    pattern: "^[A-Za-z0-9]{3,12}$",
    errorMsg:
      "Username should be 3-12 characters & should not include any special character!",
  },
  {
    id: 3,
    name: "name",
    lable: "Name",
    type: "text",
    placeholder: "John Smith",
    required: true,
    pattern: "^[A-Za-z]{1,20}$",
    errorMsg: "Name is required!",
  },
  {
    id: 4,
    name: "email",
    lable: "Email",
    type: "email",
    placeholder: "example@email.com",
    required: true,
    errorMsg: "Enter a valid email!",
  },
  {
    id: 5,
    name: "password",
    lable: "Password",
    type: "password",
    placeholder: "Password",
    required: true,
    pattern:
      "^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{6,20}$",
    errorMsg:
      "Password should be 6-20 characters and include at last 1 num, 1 letter, 1 special character!",
  },
  {
    id: 6,
    name: "address",
    lable: "Address",
    type: "text",
    placeholder: "Address",
    required: true,
    errorMsg: "Address is required!",
  },
];
const productInpDetails = [
  {
    id: 2,
    name: "title",
    lable: "Title",
    type: "text",
    placeholder: "Product title",
    required: true,
    errorMsg: "Title is required!",
  },
  {
    id: 3,
    name: "description",
    lable: "Description",
    type: "text",
    placeholder: "Product description",
    required: true,
    errorMsg: "Description is required!",
  },
  {
    id: 4,
    name: "category",
    lable: "Category",
    type: "text",
    placeholder: "Product category",
    required: true,
    errorMsg: "Category is required!",
  },
  {
    id: 5,
    name: "price",
    lable: "Price",
    type: "number",
    placeholder: "Product price",
    required: true,
    errorMsg: "Price is required!",
  },
  {
    id: 6,
    name: "stock",
    lable: "In Stock",
    type: "text",
    placeholder: "In Stock",
    required: true,
    errorMsg: "This field is required!",
  },
];
const blogInputs = [
  {
    id: 1,
    name: "title",
    lable: "Title",
    type: "text",
    placeholder: "Blog title",
    required: true,
    errorMsg: "Title is required!",
  },
  {
    id: 2,
    name: "description",
    lable: "Description",
    type: "text",
    placeholder: "Blog description",
    required: true,
    errorMsg: "Description is required!",
  },
  {
    id: 3,
    name: "tags",
    lable: "Tags",
    type: "text",
    placeholder: "Travel, Communication",
    required: true,
    errorMsg: "Tag is required!",
  },
];

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
    // <div className={darkMode ? "App dark" : "App"}>
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/pu" element={<ProfileUser />} />
      <Route path="/referral" element={<ReferralForm />} />
      <Route path="/form" element={<Form />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/password" element={<Setting />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="login" element={<Login />} />
      {/* nested routes */}
      <Route path="users">
        <Route index element={<Lists type="user" />} />
        <Route path=":userId" element={<Detail />} />
        <Route
          path="addnew"
          element={
            <AddNew inputs={userInpDetails} titlee="Add New User" type="USER" />
          }
        />
      </Route>

      <Route path="orders" element={<Orders />} />

      {/* nested routes */}
      <Route path="products">
        <Route index element={<Lists type="product" />} />
        <Route path=":productId" element={<Detail />} />
        <Route
          path="addnew"
          element={
            <AddNew
              inputs={productInpDetails}
              titlee="Add New Product"
              type="PRODUCT"
            />
          }
        />
      </Route>

      <Route path="blogs">
        <Route index element={<Blogs type="blog" />} />
        <Route path=":blogId" element={<BlogDetail />} />
        <Route
          path="addnew"
          element={
            <AddNew inputs={blogInputs} titlee="Add New Blog" type="BLOG" />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
