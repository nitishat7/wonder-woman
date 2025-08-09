import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center text-center">
      <Image
        src="/images/hero-new.jpg" // You'll need to add this image to your public/images directory
        alt="Empowering Futures Through Education"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Empowering Futures Through Education
        </h1>
      </div>
    </section>
  );
};

export default HeroSection; 