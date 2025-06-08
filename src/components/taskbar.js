import React from "react";
import { Link } from "react-router-dom";

function Taskbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-gray-800 text-white flex items-center justify-between px-4 shadow-inner z-50">
      <div className="flex gap-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded text-sm">Home</Link>
        <Link to="/contact" className="hover:bg-gray-700 p-2 rounded text-sm">Contact Us</Link>
        <Link to="/services" className="hover:bg-gray-700 p-2 rounded text-sm">Our Services</Link>
        <Link to="/about" className="hover:bg-gray-700 p-2 rounded text-sm">About Us</Link>
      </div>
    </div>
  );
}

export default Taskbar;
