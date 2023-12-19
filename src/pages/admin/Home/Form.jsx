import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Form() {
     const [email, setEmail] = useState("");
     const [price, setPrice] = useState("");
     const [startdate, setStartdate] = useState("");
     const [expirydate, setExpirydate] = useState("");
    const [error, setError] = useState("");
     const navigate = useNavigate();

   const handleSubmit = async (e) => {
     e.preventDefault();

     try {
       const storedApiToken = localStorage.getItem("apiToken");
       const response = await axios.post(
         "http://localhost:3000/packages/assign_package",
         {
           email,
           price,
           startdate,
           expirydate,
         },
         {
           headers: {
             Authorization: storedApiToken,
             "Content-Type": "application/json",
           },
         }
       );

       // Access the response data
       const responseData = response.data;
       console.log(responseData);

       // Check if the response status is 200 (OK)
       if (response.status === 200) {
         alert("Status Updated");
       } else {
         alert("Status not updated. Please try again.");
       }
     } catch (error) {
       console.error("Error logging in:", error.message);
       setError("Error logging in. Please try again.");
     }
   };
    const apiEndpoint = "http://localhost:3000/packages/assign_package";

    // Function to get API token from local storage
    const getApiToken = () => {
      return localStorage.getItem("apiToken");
    };

    // Axios function with token included in headers
    const axiosWithAuth = async (requestData) => {
      const token = getApiToken();

      if (!token) {
        // Handle the case where the token is not available
        console.error("No API token found in local storage");
        return;
      }

      try {
        const response = await axios.post(apiEndpoint, requestData, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json", // Adjust content type as needed
          },
        });

        // Handle the response as needed
        console.log("Response:", response.data);
      } catch (error) {
        // Handle errors
        console.error("Error:", error.message);
      }
    };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
        >
          User Email
        </label>
        <input
          type="email"
          id="email"
          value={email} // Add this line to bind the value to the state
          onChange={(e) => setEmail(e.target.value)} // Add this line to handle input changes
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
        >
          Package Price
        </label>
        <input
          type="text"
          id="text"
          value={price} // Add this line to bind the value to the state
          onChange={(e) => setPrice(e.target.value)} // Add this line to handle input changes
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="startDate"
          className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
        >
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          value={startdate} // Add this line to bind the value to the state
          onChange={(e) => setStartdate(e.target.value)} // Add this line to handle input changes
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
       
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="expiryDate"
          className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
        >
          Expiry Date
        </label>
        <input
          type="date"
          id="expiryDate"
          value={expirydate} // Add this line to bind the value to the state
          onChange={(e) => setExpirydate(e.target.value)} // Add this line to handle input changes
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
       
        />
      </div>

      <div className="flex items-start mb-5"></div>
      <div className="flex items-start mb-5">
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
