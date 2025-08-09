"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images - you can replace these with your actual image URLs
  const backgroundImages = [
    "images/hero1/img1.JPG",
    "images/hero1/img2.JPG",
    "images/hero1/img3.JPG",
    "images/hero1/img4.JPG",
    "images/hero1/img5.JPG",
    "images/hero1/img6.JPG",
  ];

  // Auto-scroll through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Images with Smooth Transitions */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block">Empowering</span>
            <span className="block text-yellow-400">Communities,</span>
            <span className="block">Transforming Lives</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200">
            Join us in our mission to create lasting change through education,
            healthcare, and sustainable development.
          </p>

          {/* Call to Action Button */}
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-float" />
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-blue-400/20 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-green-400/20 rounded-full animate-float" />
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-yellow-400 scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero1;
