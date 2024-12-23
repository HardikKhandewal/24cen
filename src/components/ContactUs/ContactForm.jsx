import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vvb9f98', 'template_mspnwdo', form.current, 'unzesMX_wSaJ-Yaqm')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        form.current.reset();
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="user_name" required placeholder="Enter your name"
                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="user_email" required placeholder="Enter your email"
                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" name="user_phone" required placeholder="Enter your phone number"
                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea name="message" required placeholder="Enter your message"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="4"></textarea>
        </div>
        <div>
          <input type="submit" value="Send Message"
                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[#EFEFE5] hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;