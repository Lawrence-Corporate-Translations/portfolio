import React from "react";
import { Card, CardContent } from "../components/card";
import { Button } from "../components/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-900 px-6 py-12 space-y-16">

      {/* Header */}
      <header className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-sm">
          Lawrence Corporate Translations
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-700">
          Professional translation services for businesses across sectors, delivering clarity and accuracy in every language.
        </p>
        <Link to="/contact">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-all">
            Contact Us!
          </Button>
        </Link>
      </header>

      {/* Services Section */}
      <section className="grid md:grid-cols-2 gap-10 px-2 md:px-8">
        <Card className="bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700">Our Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We provide certified document translation, website localization, legal and technical translation, and more.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700">Why Choose Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Native speakers, industry expertise, fast turnaround times, and a commitment to excellence.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 border-t pt-6">
        &copy; {new Date().getFullYear()} Lawrence Corporate Translations Ltd. All rights reserved.
      </footer>
    </main>
  );
}
