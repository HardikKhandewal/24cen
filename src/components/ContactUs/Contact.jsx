import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vvb9f98', 'template_mspnwdo', form.current, 'unzesMX_wSaJ-Yaqm')
      .then((result) => {
        setFormSuccess(true);
        form.current.reset();
        setTimeout(() => setFormSuccess(false), 5000);
      }, (error) => {
        console.error('Error:', error.text);
      });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <div className="w-32 h-1.5 bg-orange-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products? Ready to take your packaging to the next level? 
            We're here to help you succeed.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div className="lg:w-2/5 bg-gradient-to-br from-slate-800 to-slate-900 text-gray-100 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="p-10 h-full flex flex-col">
              <div className="grid grid-cols-2 gap-10 mb-10">
                {/* Address */}
                <div className="group col-span-2 sm:col-span-1">
                  <div className="w-14 h-14 rounded-full border-2 border-gray-600 flex items-center justify-center mb-4 mx-auto group-hover:border-orange-400 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 group-hover:text-orange-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold tracking-wider text-orange-400 text-center mb-3">ADDRESS</h3>
                  <p className="text-sm text-center leading-relaxed">Plot 310, Sector 1, Pithampur,<br/>Dist - Dhar, (M.P.) 454775</p>
                </div>

                {/* Email */}
                <div className="group col-span-2 sm:col-span-1">
                  <div className="w-14 h-14 rounded-full border-2 border-gray-600 flex items-center justify-center mb-4 mx-auto group-hover:border-orange-400 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 group-hover:text-orange-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold tracking-wider text-orange-400 text-center mb-3">EMAIL</h3>
                  <a href="mailto:info@21stcenturycaps.com" className="text-sm text-center block hover:text-orange-400 transition-colors duration-300">
                    info@21stcenturycaps.com
                  </a>
                </div>

                {/* Phone */}
                <div className="group col-span-2 sm:col-span-1">
                  <div className="w-14 h-14 rounded-full border-2 border-gray-600 flex items-center justify-center mb-4 mx-auto group-hover:border-orange-400 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 group-hover:text-orange-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold tracking-wider text-orange-400 text-center mb-3">PHONE</h3>
                  <a href="tel:+91 9602467685" className="text-sm text-center block hover:text-orange-400 transition-colors duration-300">
                    +91 9602467685
                  </a>
                </div>

                {/* Social Links */}
                <div className="col-span-2 sm:col-span-1">
                  <h3 className="text-sm font-semibold tracking-wider text-orange-400 text-center mb-4">CONNECT WITH US</h3>
                  <div className="flex justify-center gap-6">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                      <a
                        key={social}
                        href={`#${social}`}
                        className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-orange-400 hover:text-orange-400 hover:scale-110 transition-all duration-300"
                      >
                        <span className="sr-only">{social}</span>
                        <img className='h-6 w-6' src="https://img.icons8.com/?size=100&id=0gQCRCDXNz1D&format=png&color=FFFFFF" alt="" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="flex-grow mt-6">
                <iframe
                  title="location"
                  className="w-full h-full rounded-2xl border-2 border-gray-700 hover:border-orange-400 transition-colors duration-300"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9169795659313!2d75.69798577534577!3d22.61957517945826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396257bddc3693ff%3A0x2cdfce882d449b41!2s21st%20century%20caps%20solutions%20private%20limited!5e0!3m2!1sen!2sin!4v1734960018228!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5 bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-10">We'd love to hear from you. Fill out the form below and we'll get back to you shortly.</p>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    required
                    type="text"
                    name="user_name"
                    className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-orange-500 focus:outline-none py-3 bg-transparent transition-colors duration-300"
                    placeholder="Name"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-500 peer-focus:text-sm">
                    Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    required
                    type="email"
                    name="user_email"
                    className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-orange-500 focus:outline-none py-3 bg-transparent transition-colors duration-300"
                    placeholder="Email"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-500 peer-focus:text-sm">
                    Email
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input
                  required
                  type="tel"
                  name="user_phone"
                  className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-orange-500 focus:outline-none py-3 bg-transparent transition-colors duration-300"
                  placeholder="Phone"
                />
                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-500 peer-focus:text-sm">
                  Phone
                </label>
              </div>

              <div className="relative group">
                <textarea
                  required
                  name="message"
                  rows="4"
                  className="peer w-full border-2 border-gray-300 rounded-xl text-gray-900 placeholder-transparent focus:border-orange-500 focus:outline-none p-4 transition-colors duration-300"
                  placeholder="Message"
                ></textarea>
                <label className="absolute left-2 -top-3 bg-white px-2 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-orange-500 peer-focus:text-sm">
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>

            {/* Success Message */}
            {formSuccess && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;