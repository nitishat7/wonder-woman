"use client";

import { Button } from "@/components/ui/button";

const Hero2 = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden mt-5">
      {/* Main Container with Diagonal Split */}
      <div className="relative h-screen flex">
        {/* Left Section - Image */}
        <div className="relative w-1/2 h-full overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/hero2/img1.jpg')`, // Replace with your actual image
            }}
          />
          
         
        </div>

        {/* Right Section - Text Content */}
        <div className="relative w-1/2 h-full bg-white flex items-center justify-center">
          <div className="max-w-md mx-auto px-8 text-center">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
              Spread Love and Happiness
            </h1>
            
            {/* Accent Line */}
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
            
            {/* Paragraph Text */}
            <p className="text-lg md:text-xl text-black leading-relaxed mb-8">
              Lions and Leos make a difference every day, everywhere we serve. 
              And with the support of our international association and our global 
              foundation, we are changing lives, communities and the world we share.
            </p>
            
            {/* Call to Action Button */}
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg rounded-md transition-all duration-300 transform "
            >
              Learn more
            </Button>
          </div>
        </div>

        {/* Diagonal Split Line */}
        <div className="absolute top-0 left-1/2 w-0 h-0 border-l-[50vh] border-l-white border-b-[100vh] border-b-transparent transform -translate-x-1/2"></div>
      </div>

      {/* Responsive Design for Mobile */}
      <div className="md:hidden">
        <div className="relative h-screen bg-white">
          {/* Mobile Image */}
          <div className="relative h-1/2 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/community-service.jpg')`, // Replace with your actual image
              }}
            />
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/30 transform rotate-45 -translate-x-16 -translate-y-16">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/40 to-transparent"></div>
            </div>
          </div>

          {/* Mobile Text Content */}
          <div className="relative h-1/2 bg-white flex items-center justify-center px-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-black mb-4">
                Uniting for good
              </h1>
              
              <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
              
              <p className="text-base text-black leading-relaxed mb-6">
                Lions and Leos make a difference every day, everywhere we serve. 
                And with the support of our international association and our global 
                foundation, we are changing lives, communities and the world we share.
              </p>
              
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 text-base rounded-md transition-all duration-300 transform"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
