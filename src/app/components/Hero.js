import Image from "next/image";
import Link from "next/link";
import { GitHub, Linkedin } from "react-feather";
import { Link as ScrollTo } from "react-scroll";
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="block">Hi, I&apos;m Mahmoud</span>
            <span className="text-blue-600">Frontend Developer</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I build modern, responsive web applications with a focus on user
            experience and clean code. Specializing in React, Next.js, and
            modern frontend technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <ScrollTo
              to="contact"
              duration={900}
              smooth={true}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium cursor-pointer"
            >
              Contact Me
            </ScrollTo>
            <ScrollTo
              to="projects"
              smooth={true}
              duration={900}
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium text-gray-800 dark:text-white cursor-pointer"
            >
              View Projects
            </ScrollTo>
            <button className="px-6 py-3 border bg-white border-gray-700 rounded-full hover:bg-blue-100 hover:text-gray-950  transition-colors font-medium text-gray-800  cursor-pointer">
              <Link
                href="/Mahmoud-Essam.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV"
                download
              >
                Download CV
              </Link>
            </button>
          </div>
          <div className="mt-8 flex gap-4">
            <Link
              href="https://github.com/mahmoudessamdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GitHub className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mahmoud-essam-02a1b2242/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
            <Image
              src="/developer.jpg"
              alt="Frontend Developer"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
