import { MdOutlineAttachMoney } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Card = ({ title, description, button, href }) => {
  const [userStatus, setUserStatus] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    // Fetch the token from localStorage
    const storedToken = localStorage.getItem("apiToken");

    // Check if the token exists
    if (storedToken) {
      try {
        // Decode the token
        const decodedToken = jwtDecode(storedToken);
        console.log(decodedToken);

        // Set user info in the state
        setUserInfo((prev) => {
          // Return the updated state based on the decoded token
          return { ...prev, ...decodedToken };
        });
        setUserStatus((prev) => {
          // Return the updated state based on the decoded token's status
          return decodedToken.status || null;
        });
      } catch (error) {
        console.error("Error decoding token:", error.message);
        // Handle error, e.g., remove invalid token from localStorage
        localStorage.removeItem("apiToken");
      }
    }
  }, []); // The empty dependency array ensures that this effect runs only once on component mount
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-gray-700">
      <a href={href}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 flex items-center gap-x-2 font-normal text-gray-700 light:text-gray-400">
        <GiMoneyStack />
        {/* {userInfo[0]?.price} */}

        <MdOutlineAttachMoney />
      </p>
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
