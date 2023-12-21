import { MdOutlineAttachMoney } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Card = ({ title, description, button, href }) => {
  const [user, setUser] = useState(null);
  const [userPackages, setUserPackages] = useState([]);
  const [amount, setAmount] = useState(null);

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
        .get(
          "https://hashminer-6a4a925db20f.herokuapp.com/packages/user_packages",
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json", // Adjust content type as needed
            },
          }
        )
        .then((response) => {
          if (response.data) {
            const totalPriceAmount = response.data.reduce((sum, drive) => {
              if (drive.price && drive.price !== undefined) {
                const price = parseInt(drive.price, 10); // Parse as decimal
                console.log("Adding price:", price);
                return sum + price;
              }
              console.log("Skipping undefined price:", drive.price);
              return sum;
            }, 0);

            setAmount(totalPriceAmount);
            console.log("Total Price", totalPriceAmount);
          }
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
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-gray-700">
      <a href={href}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 flex items-center gap-x-2 font-normal text-gray-700 light:text-gray-400">
        <GiMoneyStack />
        Total Investment<span className="text-green-700">{amount}</span>
        <MdOutlineAttachMoney />
      </p>
      <p className="mb-3 flex items-center gap-x-2 font-normal text-gray-700 light:text-gray-400">
        <GiMoneyStack />
        Daily Bonus:
        <span className="text-green-700">
          {amount !== null ? amount * 0.04 : 0}
        </span>
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
      {console.log("User Info Bro", user)}
    </div>
  );
};

export default Card;
