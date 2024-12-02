import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-[#fdf5e6] shadow-md">
      <h1 className="text-2xl font-bold text-green-700">SunMall</h1>
      <nav className="flex space-x-6">
        <a href="#home" className="text-green-600 font-semibold hover:text-green-800">
          Home
        </a>
        <a href="#about" className="text-green-600 font-semibold hover:text-green-800">
          About
        </a>
        <a href="#chips" className="text-green-600 font-semibold hover:text-green-800">
          Chips
        </a>
        <a href="#services" className="text-green-600 font-semibold hover:text-green-800">
          Services
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border rounded-lg text-sm"
        />
        <div className="relative">
          <button className="p-2 rounded-full bg-gray-200">
            <img src="https://img.icons8.com/ios-glyphs/30/null/shopping-cart.png" alt="cart" />
          </button>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            4
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
