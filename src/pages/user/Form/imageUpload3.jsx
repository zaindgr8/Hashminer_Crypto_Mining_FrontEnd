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
    <div>
      <div>
        <h2>Create Task</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              className="border-2"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={description}
              className="border-2"
              onChange={handleDescriptionChange}
            />
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
    </div>
  );
};

export default Upload;
