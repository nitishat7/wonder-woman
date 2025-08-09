import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Education = () => {
  const programs = [
    {
      title: "Scholarship Program",
      description: "Provides financial assistance to deserving students, covering tuition, books, and other educational expenses.",
      image: "/images/scholarship.png", // You'll need to add this image
      bgColor: "bg-teal-500", // Example background for the card header
    },
    {
      title: "Mentorship Program",
      description: "Connects students with experienced professionals who offer guidance, support, and career advice.",
      image: "/images/mentorship.png", // You'll need to add this image
      bgColor: "bg-white",
    },
    {
      title: "After-School Tutoring",
      description: "Offers academic support and homework help in a safe and structured environment.",
      image: "/images/tutoring.png", // You'll need to add this image
      bgColor: "bg-white",
    },
    {
      title: "Career Development",
      description: "Prepares students for future careers through workshops, internships, and networking opportunities.",
      image: "/images/career.png", // You'll need to add this image
      bgColor: "bg-gray-800",
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

    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((program, index) => (
          <Card key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <CardHeader className={`relative h-48 flex items-center justify-center ${program.bgColor}`}>
              {program.image && (
                <Image
                  src={program.image}
                  alt={program.title}
                  width={150}
                  height={150}
                  objectFit="contain"
                  className="z-10"
                />
              )}
              {/* Optional: Add a subtle overlay or pattern for visual interest */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: program.bgColor === 'bg-white' ? 'none' : 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)' }} />
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                {program.title}
              </CardTitle>
              <CardDescription className="text-gray-600 flex-grow">
                {program.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
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

  export default Education;
