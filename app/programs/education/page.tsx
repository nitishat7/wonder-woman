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
      description: "Provides financial assistance to deserving students, covering tuition, books, and other educational expenses. Our scholarship program has helped over 500 students pursue their dreams of higher education.",
      image: "/images/scholarship.jpg",
    },
    {
      title: "Mentorship Program",
      description: "Connects students with experienced professionals who offer guidance, support, and career advice. Join our network of mentors and help shape the next generation of leaders.",
      image: "/images/mentorship.jpg",
    },
    {
      title: "After-School Tutoring",
      description: "Offers academic support and homework help in a safe and structured environment. Our qualified tutors provide personalized attention to help students excel in their studies.",
      image: "/images/tutoring.jpg",
    },
    {
      title: "Career Development",
      description: "Prepares students for future careers through workshops, internships, and networking opportunities. We bridge the gap between education and employment.",
      image: "/images/career.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
    {/* Hero section for Program Highlights */}
    <div className="relative h-64 flex items-center justify-center mb-12 overflow-hidden mt-10">
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

  export default Education;
