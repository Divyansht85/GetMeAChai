import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-1 md:px-4 h-17 md:h-12 flex justify-center items-center">
      <p className="text-center text-small md:text-base">
        Copywrite &copy; {new Date().getFullYear()} Get me A Chai - All rights
        reserved! Author: Divyansh Tripathi | Email: divyansht85@gmail.com
      </p>
    </footer>
  );
};

export default Footer;
