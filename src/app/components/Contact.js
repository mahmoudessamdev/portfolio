import { useState } from "react";
import { GitHub, Linkedin } from "react-feather";
import ContactForm from "./ContactForm";
export default function Contact() {
  

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Contact <span className="text-blue-600">Me</span>
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m always interested in hearing about new projects,
              opportunities, and collaborations. Whether you have a question or
              just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                    Email
                  </h4>
                  <a
                    href="mailto:contact@example.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    mahmoudessam382@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                    Social Profiles
                  </h4>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="https://github.com/mahmoudessamdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                    >
                      <GitHub className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mahmoud-essam-02a1b2242/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
