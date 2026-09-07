import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-yellow-300 to-yellow-500 text-gray-800 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Social Networks */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">FOLLOW US ON</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-800">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-800">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        {/* Fair Questions */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">FAIR QUESTIONS</h2>
          <i className="fas fa-angle-right text-gray-800"></i>
        </div>

        {/* Drop a Recipe */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">DROP A RECIPE</h2>
          <i className="fas fa-angle-right text-gray-800"></i>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">CONTACT</h2>
          <p className="text-sm text-center">
            Nutrition & health
            <br />
            Route de castelnaudary
            <br />
            31250 REVEL
            <br />
            <a href="wwW.nutritionetsante.fr" className="text-blue-800">
              wwW.nutritionetsante.fr
            </a>
          </p>
        </div>
      </div>

      {/* Information */}
      <div className="container mx-auto mt-8">
        <h2 className="text-lg font-semibold mb-4">INFORMATION</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="space-y-2 md:space-y-0">
            <a href="#" className="hover:text-gray-800">
              FREQUENTLY ASKED QUESTIONS
            </a>
            <a href="#" className="hover:text-gray-800">
              CONTACT
            </a>
            <a href="#" className="hover:text-gray-800">
              NEWSLETTER
            </a>
          </div>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-yellow-300 px-3 py-1 rounded-md text-gray-800 focus:outline-none focus:bg-yellow-400"
            />
            <button className="bg-blue-500 px-4 py-1 rounded-md text-white font-semibold hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="container mx-auto mt-8 text-center">
        <p>Legal Notice</p>
        <p>Verywell agency creation</p>
      </div>
    </footer>
  );
};

export default Footer;
