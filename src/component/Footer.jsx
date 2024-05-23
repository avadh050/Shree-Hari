import React, { useState } from "react";

const Footer = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [support, setSupport] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    setShowContact(false); // Close other sections when About is opened
    setSupport(false); // Close Support section when About is opened
  };

  const handleContactClick = () => {
    setShowContact(!showContact);
    setShowAbout(false); // Close other sections when Contact is opened
    setSupport(false); // Close Support section when Contact is opened
  };

  const handleSupportClick = () => {
    setSupport(!support);
    setShowAbout(false); // Close other sections when Support is opened
    setShowContact(false); // Close Contact section when Support is opened
  };

  return (
    <footer
      className={`bg-gray-800 bg-opacity-95 inset-x-0  2xl:fixed  xl:relative md:relative lg:fixed sm:fixed bottom-0  text-white py-6`}
      style={{ minHeight: "100px" }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between"
        style={{ height: "100%" }}
      >
        <div>
          <div className="flex justify-center items-center space-x-6">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a
                    className="text-gray-300 hover:text-white"
                    onClick={handleAboutClick}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 hover:text-white"
                    onClick={handleContactClick}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 hover:text-white"
                    onClick={handleSupportClick}
                  >
                    Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {showAbout && (
            <div className="mt-4 text-center">
              <p>
                Welcome to <strong>Shree Hari Engineer's</strong>, your trusted
                partner for top-notch air conditioning and service and repair.
                With years of expertise in the industry, we are dedicated to
                ensuring your comfort and satisfaction.
              </p>
              {/* <p>
                At <strong>Shree Hari Engineer's</strong>, we prioritize your
                convenience. Our services include comprehensive air conditioning
                maintenance to prevent potential breakdowns and ensure your
                system operates at peak efficiency.
              </p> */}
            </div>
          )}
          {showContact && (
            <div className="mt-4 text-center">
              <p>Contact Us</p>
              <p>Phone: +91 8320316525</p>
            </div>
          )}
          {support && (
            <div className="mt-4 text-center">
              <p>support@gmail.com</p>
            </div>
          )}
        </div>
        <div>
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} My Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
