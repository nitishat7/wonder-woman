"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Import the Button component

export default function MissionPage() {
  return (
    <div className="font-sans text-[#333]">
      {/* Section 1: Our Mission */}
      <section className="relative flex justify-center items-center h-[600px] bg-[url('/images/mission/img1.jpg')] bg-cover bg-center text-white text-center p-5 rounded-lg overflow-hidden my-[60px] mx-auto max-w-[1200px]">
        {/* Overlay for background effect */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-10"></div>
        {/* Content */}
        <div className="relative z-20 max-w-[800px]">
          <h1 className="text-5xl font-bold mb-5">
            Our Mission
          </h1>
          <p className="text-lg leading-relaxed mb-10">
            At Tech Insights, our mission is to demystify the world of technology, making it accessible and engaging for everyone. We strive to provide clear, insightful, and practical information that empowers our readers to navigate the digital landscape with confidence. We believe that technology should be a tool for progress and enrichment, and we are committed to fostering a community of informed and inspired tech enthusiasts.
          </p>
          <Button className="bg-[#007bff] text-white py-[15px] px-[30px] text-lg border-none rounded-md cursor-pointer font-bold no-underline"
          onClick={() => alert('Explore Articles clicked!')} // Placeholder onClick
          >
            Explore Articles
          </Button>
        </div>
      </section>

      {/* Section 2: Our Leadership */}
      <section className="flex items-center justify-center py-[60px] px-5 bg-[#f8f8f8] my-10 mx-auto max-w-[1200px] rounded-lg">
        <div className="flex-1 pr-10 text-left">
            <h2 className="text-4xl font-bold text-black mb-5">
            Our leadership
          </h2>
          <p className="text-lg leading-relaxed mb-[30px]">
            Because the GSMA represents the interests of its members, our leadership reflects this, through a global board made up of leaders from the operator community.
          </p>
          <Button className="bg-yellow-400 text-black py-[15px] px-[30px] text-lg border-none rounded-md cursor-pointer font-bold no-underline"
          onClick={() => alert('Meet the team clicked!')} 
          >
            Meet the team
          </Button>
        </div>
        <div className="flex-1">
          <Image
            src="/images/mission/img2.jpg" 
            alt="Audience"
            width={600}
            height={400}
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Section 3: Who we are */}
      <section className="flex items-center justify-center py-[60px] px-5 my-10 mx-auto max-w-[1200px] rounded-lg">
        <div className="flex-1 pr-10">
          <Image
            src="/images/mission/img3.jpg"
            alt="Business Meeting"
            width={600}
            height={400}
            className="max-w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-4xl font-bold text-black mb-5">
            Who we are
          </h2>
          <p className="text-lg leading-relaxed mb-[30px]">
            With our members, we believe we have a role to play in creating a thriving society that is affordable, accessible and reliable for everyone.
          </p>
          <Button className="bg-yellow-400 text-black py-[15px] px-[30px] text-lg border-none rounded-md cursor-pointer font-bold no-underline"
          >
            See who we are
          </Button>
        </div>
      </section>
    </div>
  );
}
