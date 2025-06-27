import { GitHub, Linkedin } from "react-feather";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Dev<span className="text-blue-600">Portfolio</span>
            </span>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
              Building modern web experiences with cutting-edge technologies.
            </p>
          </div>

          <div className="flex space-x-6">
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

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {currentYear} DevPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
