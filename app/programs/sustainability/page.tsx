import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sustainability = () => {
  const programs = [
    {
      title: "Green Energy Initiative",
      description: "Promoting renewable energy adoption and sustainable power solutions for communities. We help implement solar panels, wind energy, and other clean technologies to reduce carbon footprints.",
      image: "/images/green-energy.jpg",
    },
    {
      title: "Waste Reduction Program",
      description: "Comprehensive recycling and waste management programs to minimize environmental impact. Our initiatives include composting, plastic reduction, and circular economy practices.",
      image: "/images/waste-reduction.jpg",
    },
    {
      title: "Urban Gardening",
      description: "Community gardens and urban farming initiatives to promote local food production and green spaces. We teach sustainable agriculture techniques and provide resources for urban farmers.",
      image: "/images/urban-gardening.jpg",
    },
    {
      title: "Environmental Education",
      description: "Educational programs and workshops to raise awareness about environmental conservation and sustainable living practices for all age groups.",
      image: "/images/environmental-education.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Hero section for Program Highlights */}
      <div className="relative h-64 flex items-center justify-center mb-12 overflow-hidden">
        <Image
          src="/images/community-hero.jpg" // You'll need to add this image
          alt="Community Program Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <h2 className="relative z-20 text-3xl md:text-4xl font-bold text-white text-center">
          Program Highlights
        </h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {programs.map((program, index) => (
          <Card key={index} className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            {/* Image Section */}
            <div className="md:w-1/2 h-64 md:h-auto">
              <div className="relative w-full h-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                {program.title}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 leading-relaxed">
                {program.description}
              </CardDescription>
            </div>
          </Card>
        ))}
      </div>

      {/* Accordion Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Frequently Asked Questions
        </h3>
        <Accordion type="single" collapsible className="w-full">
          {programs.map((program, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:no-underline">
                {program.title} Details
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {program.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

  export default Sustainability;
