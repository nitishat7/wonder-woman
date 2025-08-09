import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Involved</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join us in making a difference in the lives of students. There are many ways to get involved, from volunteering your time to making a donation. Your support can help us reach more students and expand our programs.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300">
            <Link href="/volunteer">Volunteer</Link>
          </Button>
          <Button asChild className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-8 py-3 rounded-full transition-colors duration-300">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>
        <nav className="mb-8">
          <ul className="flex justify-center space-x-6 text-gray-600 text-sm md:text-base">
            <li><Link href="/about" className="hover:text-blue-600 transition-colors duration-200">About</Link></li>
            <li><Link href="/programs" className="hover:text-blue-600 transition-colors duration-200">Programs</Link></li>
            <li><Link href="/impact" className="hover:text-blue-600 transition-colors duration-200">Impact</Link></li>
            <li><Link href="/get-involved" className="hover:text-blue-600 transition-colors duration-200">Get Involved</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact</Link></li>
          </ul>
        </nav>
        <p className="text-gray-500 text-sm">@2024 EduConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
