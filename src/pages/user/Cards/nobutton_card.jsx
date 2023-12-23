import { MdPeople } from "react-icons/md";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { MdOutlineAttachMoney } from "react-icons/md";
import axios from "axios";

const Card = ({ title, description, button, href }) => {
  const [userRefralBal, setUserRefralBal] = useState(null);

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
      console.log("Decoded For Ref Bal:", decoded);

      // Make an API call with the decoded._id in the endpoint
      axios
        .get(`http://localhost:3000/auth/refral_balabce`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json", // Adjust content type as needed
          },
          maxRedirects: 0,
        })
        .then((response) => {
          // Check if the response has the expected key "userRefralBal"
          if (response.data && response.data.hasOwnProperty("userRefralBal")) {
            const refralBal = response.data.userRefralBal;
            setUserRefralBal(refralBal);
            console.log("User Refral Balance:", refralBal);
          } else {
            console.error("Unexpected response format:", response.data);
          }
        })
        .catch((error) => {
          // Handle errors
          console.error("Error making API call:", error.message);
        });
    }
  }, []); // Empty dependency array means this effect runs once on mount
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-gray-700">
      <a href={href}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
          {title}
        </h5>
      </a>
      <p className="flex items-center gap-x-2 mb-3 font-normal text-gray-700 light:text-gray-400">
        <MdPeople />
        {userRefralBal} <MdOutlineAttachMoney />
      </p>
      <div className="flex gap-y-2"></div>
    </div>
  );
};

export default Card;
