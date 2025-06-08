import React from "react";
import { Card, CardContent } from "./components/card";
import { Button } from "./components/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 space-y-12">
      <header className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-4xl font-bold">Lawrence Corporate Translations</h1>
        <p className="text-lg max-w-xl">
          Professional translation services for businesses across sectors, delivering clarity and accuracy in every language.
        </p>
        <Button>Contact Us</Button>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
            <p>
              We provide certified document translation, website localization, legal and technical translation, and more.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Why Choose Us</h2>
            <p>
              Native speakers, industry expertise, fast turnaround times, and a commitment to excellence.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-gray-600 border-t pt-4">
        &copy; {new Date().getFullYear()} Lawrence Corporate Translations Ltd. All rights reserved.
      </footer>
    </main>
  );
}
