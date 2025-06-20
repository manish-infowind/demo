import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="Medoscopic Pharma Logo"
                className="h-12 sm:h-14 md:h-16 w-auto mr-3" // Responsive sizing
              />
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                Medoscopic
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg text-lg leading-relaxed">
              Leading pharmaceutical company dedicated to advancing healthcare
              through innovative medical solutions and research.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-medoscopic-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-medoscopic-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-medoscopic-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-medoscopic-blue-600 transition-colors text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 dark:text-gray-400 hover:text-medoscopic-blue-600 transition-colors text-base"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-medoscopic-blue-600 transition-colors text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-medoscopic-blue-600 transition-colors text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-medoscopic-teal-600 flex-shrink-0" />
                <span className="text-base">
                  123 Medical Center, Healthcare District
                </span>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-medoscopic-teal-600 flex-shrink-0" />
                <span className="text-base">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-medoscopic-teal-600 flex-shrink-0" />
                <span className="text-base">info@medoscopic.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-6">
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-base">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-medoscopic-blue-500 focus:border-transparent"
              />
              <button className="bg-medoscopic-blue-600 hover:bg-medoscopic-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-base">
            © {new Date().getFullYear()} Medoscopic Pharma. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-medoscopic-blue-600 text-base transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-medoscopic-blue-600 text-base transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-medoscopic-blue-600 text-base transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;