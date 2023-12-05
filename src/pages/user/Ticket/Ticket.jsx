import Sidebar from "../Sidebar/Sidebar";
import { IoIosAlert } from "react-icons/io";
import Navbar from "../Navbar/Navbar"
import React, { useState } from "react";




const Ticket = () => {
    const [selectedImage, setSelectedImage] = useState(null);

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

  return (
    <div className="details">
      <div className="home_sidebar">
        <Sidebar />
      </div>

      <div className="detail_page_main">
        <Navbar />

        <section className="">
          <div className="py-4 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-6 text-blue-500 text-4xl tracking-tight font-extrabold text-center light:text-white">
              Submit New Support Ticket
            </h2>
           
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-primary-500 light:focus:border-primary-500 light:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-primary-500 light:focus:border-primary-500 light:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-primary-500 light:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 border-2 hover:text-green-500 hover:border-green-500 text-blue-500 border-blue-500 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
              >
                Send message
              </button>

              <div className=" border rounded-md">
                <label
                  htmlFor="imageInput"
                  className="block text-sm font-medium text-gray-700"
                >
                </label>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-2 p-2   rounded-md"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ticket
