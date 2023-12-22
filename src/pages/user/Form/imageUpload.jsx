import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Qr from "./qr.png";
import { IoIosWallet } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Upload = () => {
  const generateRandomCode = () => {
    return "0x1b0a98baba3d1471b160694145b974688f8fc2b1";
  };
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [referralCode, setReferralCode] = useState(generateRandomCode());
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "donxxf3zl",
        uploadPreset: "eh5gpngl",
      },
      function (error, result) {
        console.log(result);
      }
    );
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setIsCopied(true);

    // Reset the copied state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateInputs = () => {
    // Validate title and description
    if (!fullName.trim()) {
      alert("Please enter your Full Name.");
      return false;
    }

    // You can add similar validation for other fields as needed
    return true;
  };

  const getApiToken = () => {
    return localStorage.getItem("apiToken");
  };

  const axiosWithAuth = async () => {
    if (!validateInputs()) {
      return; // Stop execution if validation fails
    }

    const token = getApiToken();

    if (!token) {
      console.error("No API token found in local storage");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("title", fullName);
      formData.append("description", "test description"); // Adjust if you have a description field
      formData.append("email", email);

      const response = await axios.post(
        "https://hashminer-heroku-f3171d24210a.herokuapp.com/packages/request_package",
        formData,
        {
          headers: {
            Authorization: token,
            Accept: "application/json",
          },
        }
      );
      const response2 = await fetch(
        "https://hashminer-heroku-f3171d24210a.herokuapp.com/task",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: token,
            // "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );

      if (response2.ok) {
        console.log("Task added successfully");
        // Optionally, you can redirect or perform other actions upon successful task creation.
      } else {
        console.error("Could not add task");
      }
      console.log("Response:", response.data);
      navigate("/user", { state: {} });
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      formData.append("description", description);
      const token = getApiToken();

      if (!token) {
        console.error("No API token found in local storage");
        return;
      }
      const response = await fetch(
        "https://hashminer-heroku-f3171d24210a.herokuapp.com/task",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: token,
            // "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        alert(
          "Your package request has been successfully submitted. Your update will be available within 24 hours."
        );
        // Optionally, you can redirect or perform other actions upon successful task creation.
      } else {
        alert(
          "Please ensure that the information you provide is accurate and complete."
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleButtonClick = () => {
    axiosWithAuth();
  };

  const handleReUploadClick = (e) => {
    e.preventDefault();
    widgetRef.current.open();
  };

  return (
    <div className="max-w-full font-bold flex">
      <form onSubmit={handleSubmit}>
        <p>Wallet Address (Send Here):</p>
        <div className="bg-gray-50 border overflow-hidden rounded-lg w-full p-2.5">
          <div className="flex justify-between border-gray-300 text-gray-900 text-sm">
            <p className="text-gray-500 overflow-hidden whitespace-nowrap">
              {referralCode}
            </p>
            <button
              className="text-blue-500 font-bold"
              onClick={handleCopyCode}
            >
              Copy
            </button>
          </div>
        </div>
        {isCopied && <p className="text-blue-500 font-bold">Copied!</p>}
        <img src={Qr} className="w-[15vh] mt-5" />
        <div>
          <div className="relative mt-5">
            <input
              type="email"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="Enter Email Address"
              value={title}
              onChange={handleTitleChange}
              required
            />
            <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <br />
        <div className="relative">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            placeholder="Enter Your Full Name"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
          <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        </div>
        <br />
        <span className="flex flex-col items-start justify-start">
          <label className="text-sm font-medium text-gray-700">
            <input
              className="mt-2 p-2 rounded-md"
              type="file"
              onChange={handleFileChange}
            />
          </label>
          <button
            className="mb-3 border-[0.2vh] hover:bg-gray-200 text-sm border-gray-600 px-3 py-1 rounded-xl bg-gray-100 mt-2"
            onClick={handleReUploadClick}
          >
            Re-Upload Proof
          </button>
        </span>
        <button
          className="text-white bg-green-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
          type="submit"
        >
          Submit Request
        </button>
        <p className="mt-5 text-md sm:text-sm">
          <p className="text-blue-500">
            * Attach Screenshot of Payment Proof & start earning your profit from
            today.
          </p>
        </p>
      </form>
    </div>
  );
};

export default Upload;
