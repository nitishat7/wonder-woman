// app/about/our-story/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Target,
  Palette,
  Megaphone,
  Code,
  Headphones,
} from "lucide-react";

export default function OurStoryPage() {
  const services = [
    {
      icon: LineChart,
      title: "Research",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: Target,
      title: "Strategy",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: Palette,
      title: "Design",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: Headphones,
      title: "Support",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Background section - you can replace this with an actual image or more complex styling */}
      <div className="relative h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
        {/* This div is a placeholder for the background image from the original design */}
        {/* You can replace this with an <Image> component or a div with a background-image style */}
        <img
          src="/placeholder-marketing-strategy.png" // Replace with your actual image path
          alt="Marketing Strategy Background"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for better text readability */}
        <h1 className="text-4xl md:text-5xl font-bold text-white z-10 text-center tracking-wide uppercase">
          Marketing Strategy
        </h1>
      </div>

      <section className="container mx-auto px-4 py-12 md:py-20 -mt-24 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-orange-200 rounded-xl"
            >
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
