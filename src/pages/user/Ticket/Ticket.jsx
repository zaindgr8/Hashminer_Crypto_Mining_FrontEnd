import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Upload = () => {
  const generateRandomCode = () => {
    return "0x1b0a98baba3d1471b160694145b974688f8fc2b1";
  };

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [referralCode, setReferralCode] = useState(generateRandomCode());
  const [isCopied, setIsCopied] = useState(false);

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
          "Your support request has been successfully submitted. Your update will be available within 24 hours."
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

  return (
    <div className="w-screen h-screen overflow-hidden relative min-h-full">
      <Navbar className="absolute w-full z-10" />
      <div className="flex h-full">
        <Sidebar />
        <div className="p-10">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-6 text-blue-500 text-4xl tracking-tight font-extrabold text-center light:text-white">
              Please Share Your Inquiry With Us
            </h2>
            <div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="font-bold block mb-2 text-sm text-gray-900 light:text-gray-300"
                >
                  Your Email:
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-primary-500 light:focus:border-primary-500 light:shadow-sm-light"
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
              </div>
            </div>
            <br />
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-bold text-gray-900 light:text-gray-400"
              >
                Your message
              </label>
              <textarea
                type="text"
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-primary-500 light:focus:border-primary-500"
                value={description}
                onChange={handleDescriptionChange}
                required
              />
            </div>
            <br />

            <label className="flex flex-col justify-start text-sm font-medium text-gray-700">
              <p className="">
                Please include an image of your query here.
              </p>
              <input
                className="mt-2 p-2   rounded-md"
                type="file"
                onChange={handleFileChange}
              />
            </label>
            <br />
            <button
              className="text-white bg-green-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
              type="submit"
            >
              Submit Request
            </button>
            <p className="mt-5 text-md sm:text-sm">
              <p className="text-blue-500">
                * You can expect to receive a response within 24 hours of
                submitting your query.
              </p>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
