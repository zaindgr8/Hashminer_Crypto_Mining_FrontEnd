// App.js
import React from "react";
import Sidebar from "../Sidebar/Sidebar";


function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        {/* Sidebar content goes here */}
        <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
       <Sidebar/>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden p-4">
        {/* Navbar */}
        <header className="bg-gray-700 text-white p-4">
          {/* Navbar content goes here */}
          <h1 className="text-2xl font-semibold">Website Title</h1>
        </header>

        {/* Content */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Main Content</h2>
          <p>Your content goes here.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
