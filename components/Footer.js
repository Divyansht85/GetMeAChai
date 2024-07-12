import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 h-12 flex justify-center items-center">
      <p className="text-center md:text-small">
        Copywrite &copy; {new Date().getFullYear()} Get me A Chai - All rights
        reserved!
      </p>
    </footer>
  );
};

export default Footer;
