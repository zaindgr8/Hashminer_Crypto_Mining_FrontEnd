import { GiPayMoney } from "react-icons/gi";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Card = ({ title, description, description1, button, href }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userStatus, setUserStatus] = useState(null);

 useEffect(() => {
   // Function to get the token from local storage
   const getAuthToken = () => {
     const token = localStorage.getItem("apiToken");
     return token;
   };

   // Function to decode the token and extract the user object
   const decodeToken = (token) => {
     try {
       const decoded = jwtDecode(token);
       return decoded;
     } catch (error) {
       console.error("Error decoding token:", error.message);
       return null;
     }
   };

   // Get the token from local storage
   const token = getAuthToken();
   console.log("token in status console:",token)

   if (token) {
     // Decode the token
     const decoded = decodeToken(token);
     console.log("this is decoded: ",decoded)

     if (decoded) {
       // Set the user object in the component state
       setUserStatus((prev) => ({
         ...prev,
         ...decoded,
       }));
     }
   }
 }, []); 
   

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-gray-700">
      <a href={href}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 flex items-center gap-x-2 font-normal text-gray-700 light:text-gray-400">
        <GiPayMoney />
        {userStatus?.status}
      </p>
      {/* <p className="mb-3 flex items-center gap-x-2 font-normal text-gray-700 light:text-gray-400">
        <TbPackages /> */}

      {/* {userInfo.status === "pending" ? (
         " Your request is pending"
        ) : (
          {description}
        )} */}
      {/* </p> */}
      <div className="flex gap-y-2">
        <a
          href="/form"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
        >
          {button}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
