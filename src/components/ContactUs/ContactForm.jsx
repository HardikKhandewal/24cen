import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4mf1msq', 'template_6tx2rwg"', form.current, 'CXd4tTub5FkG08mvK')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        form.current.reset();
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <div className="max-w-md mx-4 md:mx-auto bg-gray-800 text-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Write us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <input
            name = "user_name"
            required
            type="text"
            placeholder="Name"
            className="w-full bg-transparent border-b border-gray-600 p-2 outline-none focus:border-gray-400 transition-colors"
          />
        </div>
        <div>
          <input
            name = "user_email"
            required
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-600 p-2 outline-none focus:border-gray-400 transition-colors"
          />
        </div>
        <div>
          <input
            name = "user_phone"
            required
            type="number"
            placeholder="Phone"
            className="w-full bg-transparent border-b border-gray-600 p-2 outline-none focus:border-gray-400 transition-colors"
          />
        </div>
        <div>
          <textarea
            name = "message"
            required
            placeholder="Message"
            rows={4}
            className="w-full bg-transparent border-b border-gray-600 p-2 outline-none focus:border-gray-400 transition-colors"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;