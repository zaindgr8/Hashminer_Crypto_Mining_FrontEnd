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
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      // Access the response data
      const responseData = response.data;

      if (responseData.token && responseData.token !== "invalid input") {
        // Decode the token
        // const decodedToken = jwt.decode(responseData.token);
        // const decodedToken="Hello World!"
        localStorage.setItem("apiToken", responseData.token);
        const decodedToken = jwtDecode(responseData.token);
        console.log("Decoded Token:", decodedToken);
        // Redirect to "/user" and pass the decoded token as state
        navigate("/user", { state: { user: decodedToken } });
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

              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    type="checkbox"
                    className=""
                    value=""
                    id="exampleCheck2"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>

                <a href="#!">Forgot password?</a>
              </div>

              <div className="text-center lg:text-left">
                <Link to="/Login">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="border-2 bg-blue-500 p-3 rounded-xl text-white hover:bg-black hover:text-blue-500"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Login
                  </button>
                </Link>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?
                  <a
                    href="/register"
                    className="text-blue-500 ml-5  hover:text-black"
                  >
                    Register
                  </a>
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
