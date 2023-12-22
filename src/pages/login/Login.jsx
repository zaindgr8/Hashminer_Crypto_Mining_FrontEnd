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
        "https://hashminer-6a4a925db20f.herokuapp.com/auth/login",
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

              <div className="mb-3 block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent light:border-neutral-600 light:checked:border-primary light:checked:bg-primary light:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] light:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
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
