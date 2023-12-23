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
        "http://localhost:3000/packages/request_package",
        formData,
        {
          headers: {
            Authorization: token,
            Accept: "application/json",
          },
        }
      );
      const response2 = await fetch("http://localhost:3000/task", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: token,
          // "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });

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
      const response = await fetch("http://localhost:3000/task", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: token,
          // "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });
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
        <p>Hello</p>
      </div>
    </div>
  );
};

export default Upload;
