import Mining from "./login_mining.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function Register() {
  const [cookies, setCookie] = useCookies(["token"]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const [userStatus, setUserStatus] = useState({});
  const [refral_Link, setRefral] = useState("");
  const [rememberMe, setRememberMe] = useState(false);


  const getAuthToken = () => {
    const token = localStorage.getItem("apiToken");
    return token;
  };

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error("Error decoding token:", error.message);
      return null;
    }
  };

  const handleButtonClick = async () => {
    const token = getAuthToken();

    if (token) {
      const decoded = decodeToken(token);

      if (decoded) {
        setUserStatus((prev) => ({
          ...prev,
          ...decoded,
        }));
      }
    }

    try {
      const response = await fetch(
        "https://hashminer-heroku-f3171d24210a.herokuapp.com/refral",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("apiToken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.error("API request failed:", response.statusText);
        return;
      }

      const data = await response.json();
      console.log("API response:", data);

      // Do something with the data received from the API
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsFocused(false);
    }
  };

  const registerUser = async () => {
    try {
      const response = await axios.post(
        "https://hashminer-heroku-f3171d24210a.herokuapp.com/auth/user",
        {
          name,
          email,
          password,
          refral_Link,
        }
      );

      const responseData = response.data;

      if (responseData.message === "User Created Successfully") {
        console.log("Registration successful");
        return true; // Indicate successful registration
      } else {
        console.log("Registration failed");
        return false; // Indicate failed registration
      }
    } catch (error) {
      console.error("Error registering:", error.message);
      return false; // Indicate failed registration
    }
  };

 const loginUser = async () => {
   try {
     const response = await axios.post(
       "https://hashminer-heroku-f3171d24210a.herokuapp.com/auth/login",
       {
         email,
         password,
       }
     );

     const responseData = response.data;

     if (responseData.token && responseData.token !== "invalid input") {
       const decodedToken = jwtDecode(responseData.token);
       localStorage.setItem("apiToken", responseData.token);
       console.log("Decoded Token:", decodedToken);
       navigate("/user", { state: { user: decodedToken } });
       console.log("Login successful");
     } else {
       console.log("Login failed");
       alert("Invalid input!");
     }
   } catch (error) {
     console.error("Error logging in:", error.message);
   }
 };


  const handleSubmit = async () => {
    const registrationSuccessful = await registerUser();

    if (registrationSuccessful) {
      // If registration is successful, proceed to login
      await loginUser();
    }
  };

  return (
    <section className="h-screen p-5">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img src={Mining} className="w-full" alt="Sample image" />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-2xl font-semibold">
                  Sign Up with Following
                </p>
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold light:text-white">
                  Or
                </p>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="email"
                  className="border-2 border-black rounded-lg w-full p-4"
                  id="exampleFormControlInput22"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  for="exampleFormControlInput22"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none light:text-neutral-200 light:peer-focus:text-primary"
                ></label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="email"
                  className="border-2 border-black rounded-lg w-full p-4"
                  id="exampleFormControlInput22"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  for="exampleFormControlInput22"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none light:text-neutral-200 light:peer-focus:text-primary"
                ></label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="border-2 border-black rounded-lg w-full p-4"
                  id="exampleFormControlInput22"
                  placeholder="Referral Code"
                  value={refral_Link}
                  onChange={(e) => setRefral(e.target.value)}
                />
                <label
                  for="exampleFormControlInput22"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none light:text-neutral-200 light:peer-focus:text-primary"
                ></label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="password"
                  className="border-2 border-black rounded-lg w-full p-4"
                  id="exampleFormControlInput22"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  for="exampleFormControlInput22"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none light:text-neutral-200 light:peer-focus:text-primary"
                ></label>
              </div>
              <div className="text-center lg:text-left">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="inline-block rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] light:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] light:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] light:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] light:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Register
                </button>

                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Have an account?
                  <a
                    href="#!"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    <Link to="/login" className="text-blue-500 ml-5  hover:text-black">
                      <span className="text-blue-500 font-bold px-2">Login</span>
                    </Link>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
