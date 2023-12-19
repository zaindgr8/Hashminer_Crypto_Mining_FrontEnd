import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

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
        console.log("Task added successfully");
        // Optionally, you can redirect or perform other actions upon successful task creation.
      } else {
        console.error("Could not add task");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleButtonClick = () => {
    axiosWithAuth();
  };

  return (
    <section className="">
      <div className="">
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="mt-[4vh] block mb-2 text-sm font-medium text-gray-900 light:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-primary-500 light:focus:border-primary-500 light:shadow-sm-light"
              placeholder="Enter You Email"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-primary-500 light:focus:border-primary-500 light:shadow-sm-light"
              placeholder="Enter your Full Name"
              onChange={handleFullNameChange}
              required
            />
          </div>
          {/* Add similar validation for other fields as needed */}
          <div className=" border rounded-md">
            <label
              htmlFor="imageInput"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 p-2   rounded-md"
            />
          </div>
        </form>
        <button
          onClick={handleButtonClick}
          className="py-3 mt-6 border-2 hover:text-green-500 hover:border-green-500 text-black border-black px-5 text-sm font-medium text-center rounded-lg"
        >
          Submit Request
        </button>
      </div>
      <div>
        <h2>Create Task</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={title} onChange={handleTitleChange} />
          </label>
          <br />
          <label>
            Description:
            <textarea value={description} onChange={handleDescriptionChange} />
          </label>
          <br />
          <label>
            Image:
            <input type="file" onChange={handleFileChange} />
          </label>
          <br />
          <button type="submit">Create Task</button>
        </form>
      </div>
    </section>
  );
};

export default Upload;
