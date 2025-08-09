import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Contact Us</h2>
        <p className="text-gray-600 mb-8 text-center">
          We're here to help. Reach out to us with any questions, feedback, or concerns. Our team is dedicated to providing prompt and helpful assistance.
        </p>

        <form className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-lg font-semibold text-gray-800">Your Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-lg font-semibold text-gray-800">Your Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <Label htmlFor="subject" className="text-lg font-semibold text-gray-800">Subject</Label>
            <Input
              type="text"
              id="subject"
              placeholder="Enter the subject"
              className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-lg font-semibold text-gray-800">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              rows={6}
              className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 resize-y"
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
