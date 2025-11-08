import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mt-8 scroll-mt-24">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="border border-gray-200 p-8 rounded-xl bg-transparent backdrop-blur-sm mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-6 h-6 text-gray-600 flex-shrink-0" />
                <a
                  href="mailto:rs.lukawski@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  rs.lukawski@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="w-6 h-6 text-gray-600 flex-shrink-0" />
                <a
                  href="tel:+48737340926"
                  className="text-blue-600 hover:underline"
                >
                  +48 737 340 926
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin className="w-6 h-6 text-gray-600 flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/rafal-lukawski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? "Sending..."
                  : status === "success"
                  ? "Message Sent!"
                  : status === "error"
                  ? "Error - Try Again"
                  : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-600 text-sm">Thank you! Your message has been sent.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
