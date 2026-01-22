"use client";

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With Me
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I am always interested in discussing new opportunities and innovative projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Email</p>
                  <a href="mailto:teshomewoldeyes@outlook.com" className="text-gray-900 dark:text-white hover:text-blue-600">
                    teshomewoldeyes@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/teshome-woldeyes-81647414b/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-blue-600">
                    https://www.linkedin.com/in/teshome-woldeyes-81647414b/
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <FaGithub className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">GitHub</p>
                  <a href="https://github.com/TWoldeyes-collab" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-blue-600">
                    https://github.com/TWoldeyes-collab
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Location</p>
                  <p className="text-gray-900 dark:text-white">Dallas-Fort Worth, TX</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="yourEmail@domain.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
