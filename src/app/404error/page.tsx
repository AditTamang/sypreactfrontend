"use client"


import React from "react";
import { Button } from "@/components/ui/button";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full text-center">
        <div className="relative mb-8">
          <img
            src="https://public.readdy.ai/ai/img_res/99c90e195fa97a17c72022abf2cbe8e9.jpg"
            alt="404 Illustration"
            className="mx-auto w-64 h-64 object-cover"
          />
        </div>

        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
          Oops! It seems like you've ventured into uncharted territory. The page
          you're looking for might have moved or doesn't exist.
        </p>

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="text-gray-700 hover:text-gray-900 !rounded-button whitespace-nowrap cursor-pointer"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Go Back
          </Button>

          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-teal-500 hover:bg-teal-600 text-white !rounded-button whitespace-nowrap cursor-pointer"
          >
            <i className="fas fa-home mr-2"></i>
            Return Home
          </Button>
        </div>

        <div className="mt-12 text-gray-500">
          <p>
            Need assistance?{" "}
            <a href="/contact" className="text-teal-600 hover:text-teal-700">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
