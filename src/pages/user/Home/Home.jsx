import React from "react";

const HelloWorldScreen = () => {
  // Add event listener to remove body overflow on mount
  React.useEffect(() => {
    // On mount
    document.body.style.overflow = "hidden";
    // On unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        {/* Sidebar content goes here */}
        Sidebar Content
      </div>

      {/* Main Content */}
      <div className="w-3/4 flex items-center justify-center bg-gray-200">
        {/* Centered Hello, World! */}
        <div className="text-4xl">Hello, World!</div>
      </div>
    </div>
  );
};

export default HelloWorldScreen;
