"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Import the Button component

export default function MissionPage() {
  return (
    <div className="font-sans text-[#333]">
      <section className="relative flex justify-center items-center h-[600px] bg-[url('/images/mission/img1.jpg')] bg-cover bg-center text-white text-center p-5 rounded-lg overflow-hidden my-[60px] mx-auto max-w-[1200px]">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-10"></div>
        {/* Content */}
        <div className="relative z-20 max-w-[800px]">
          <h1 className="text-5xl font-bold mb-5">
            Our Mission
          </h1>
          <p className="text-lg leading-relaxed mb-10">
          At the heart of our women’s club lies a commitment to make a meaningful difference in the lives of those in need. Guided by our motto, Lead, Rise, and Serve, we aim to empower others through acts of selfless service and compassion.

Our mission is simple yet profound: to serve the underserved, offer support to the less fortunate, and uplift our community without any personal gain. As a group of dedicated women, we channel our collective strength, knowledge, and resources to create positive change in the world around us.

We believe that true leadership is not measured by titles or accolades but by the impact we have on others. With every initiative, we rise to serve and extend a helping hand to those who need it most, making a lasting difference in our community.
          </p>
          <Button className="bg-[#007bff] text-white py-[15px] px-[30px] text-lg border-none rounded-md cursor-pointer font-bold no-underline"
          onClick={() => alert('Explore Articles clicked!')}
          >
            Explore Articles
          </Button>
        </div>
      </section>

      <section className="flex items-center justify-center py-[60px] px-5 bg-[#f8f8f8] my-10 mx-auto max-w-[1200px] rounded-lg">
        <div className="flex-1 pr-10 text-left">
            <h2 className="text-4xl font-bold text-black mb-5">
            Our leadership
          </h2>
          <p className="text-lg leading-relaxed mb-[30px]">
          Our leadership is as diverse as the women who make up our community. We are proud to be led by women from all walks of life each bringing unique perspectives, experiences, and strengths to our cause.

Some of our leaders are professionals excelling in their respective fields, while others are dedicated homemakers who have discovered their own powerful capacity to lead. No matter the background, each woman is empowered to take charge, make decisions, and inspire others.
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
          We are a group of passionate women united by a shared purpose: to serve, shape, and empower our community. With a heart for giving, we come together to make a tangible difference in the lives of those in need.
<br></br><br></br>
Our efforts span a wide range of initiatives, from organizing cervical cancer health camps and blood donation campaigns to gathering donations for the less fortunate. We actively support causes that directly impact the well being of others, all without expecting anything in return.

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
