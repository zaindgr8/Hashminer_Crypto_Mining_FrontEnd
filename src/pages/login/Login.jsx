import Mining from "./login_mining.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
// import jwt from "jsonwebtoken";

function Login() {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiResponse, setApiResponse] = useState(null); // New state to hold API response
  const navigate = useNavigate();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsFocused(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://hashminer-heroku-f3171d24210a.herokuapp.com/auth/login",
        {
          email,
          password,
        }
      );

      // Access the response data
      const responseData = response.data;
      await localStorage.removeItem("apiToken");
      if (responseData.token && responseData.token !== "invalid input") {
        // Decode the token
        localStorage.setItem("apiToken", responseData.token);
        const decodedToken = jwtDecode(responseData.token);
        console.log("Decoded Token:", decodedToken);
        if (decodedToken.is_admin) {
          navigate("/succubus", { state: { user: decodedToken } });
          console.log("User is an admin!");
        } else {
          // Redirect to "/user" and pass the decoded token as state
          navigate("/user", { state: { user: decodedToken } });
        }
      } else {
        // Handle unsuccessful login (e.g., display alert)
        alert("Invalid input!");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
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
                  Sign in with your Email
                </p>
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold light:text-white">
                  Or
                </p>
              </div>

              <div className="mb-6 relative" data-te-input-wrapper-init>
                <input
                  type="email"
                  className="border-2 border-black rounded-lg w-full p-4"
                  id="exampleFormControlInput22"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="exampleFormControlInput22" className=""></label>
              </div>

              <div className="mb-6 relative" data-te-input-wrapper-init>
                <input
                  type="password"
                  className="border-2 border-black rounded-lg w-full p-4"
                  id="exampleFormControlInput22"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="exampleFormControlInput22" className=""></label>
              </div>
              <div className="text-center lg:text-left">
                <Link to="/Login">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="inline-block rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] light:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] light:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] light:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] light:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Login
                  </button>
                </Link>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?
                  <Link
                    to="/register"
                    className="text-blue-500 ml-5  hover:text-black"
                  >
                    Register
                  </Link>
                  {apiResponse && (
                    <div className="mb-4 text-green-500">
                      API Response: {JSON.stringify(apiResponse)}
                    </div>
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
