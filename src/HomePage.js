import React from "react";
import { Button } from "./components/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col" style={{backgroundImage: `url"background2.jpg"`}}>
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">

        <nav className="hidden md:flex space-x-6 uppercase text-sm tracking-wide text-gray-700">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded text-sm">Home</Link>
        <Link to="/contact" className="hover:bg-gray-700 p-2 rounded text-sm">Contact Us</Link>
        <Link to="/services" className="hover:bg-gray-700 p-2 rounded text-sm">Our Services</Link>
        <Link to="/about" className="hover:bg-gray-700 p-2 rounded text-sm">About Us</Link>
        </nav>
        <Button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2">
          Request a Quote
        </Button>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url('/background.jpg')` }} // Replace with actual image path
      >
        <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0" />
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-serif italic px-4">
          Understanding Corporate Translation
          <br />
          Services for Businesses
        </h1>
      </section>

      {/* Slider navigation */}
      <div className="flex justify-center items-center py-4 space-x-6 text-red-600 text-lg font-medium">
        <button className="flex items-center space-x-1">
          <span>&lt;</span>
          <span>Previous</span>
        </button>
        <button className="flex items-center space-x-1">
          <span>Next</span>
          <span>&gt;</span>
        </button>
      </div>
    </main>
  );
}
