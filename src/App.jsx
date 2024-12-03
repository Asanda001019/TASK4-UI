import React from "react";
import Chips from "./assets/chips.png";
import Logo from "./assets/chiplogo.png"
import Smokey from "./assets/smokey.jpg"
import Extra from "./assets/extralogo.png"
import Chilli from "./assets/chilli.jpg"

const App = () => {
  return (
    <div className="bg-[#f4f1e8] min-h-screen font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="w-[100px] h-[30px] object-cover rounded-lg">
        <img src={Logo}/>
        
        </div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Chips</li>
          <li>Services</li>
        </ul>
        <div className="flex items-center bg-black p-2 rounded-full space-x-2 w-72">
  {/* Search Icon */}
  <img
    src="https://img.icons8.com/ios-filled/20/ffffff/search--v1.png"
    alt="search icon"
    className="ml-2"
  />
  {/* Search Input */}
  <input
    type="text"
    placeholder="Search"
    className="flex-1 bg-black text-white placeholder-gray-400 focus:outline-none"
  />
  {/* Divider */}
  <div className="h-6 w-[1px] bg-gray-500 mx-2"></div>
  {/* Cart Icon */}
  <div className="relative">
    <button className="p-2">
      <img
        src="https://img.icons8.com/ios-glyphs/20/ffffff/shopping-cart.png"
        alt="cart"
      />
    </button>
    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
      4
    </span>
  </div>
</div>

      </nav>

   {/* Main Section */}
<main className="px-6 py-10 mb-12">
  <div className="flex flex-col md:flex-row items-center justify-between">
    {/* Left Content */}
    <div className="text-left max-w-lg mb-10">
      <h2 className="text-4xl font-bold text-gray-800 leading-snug">
        Eat Our Grilled <br />
        Potato Chips
      </h2>
      <p className="text-gray-600 mt-4">
        Satisfying savory Chinese meat sauce chips without<br />
        any hard-to-find ingredients.
      </p>
      <div className="flex items-center mt-6">
        {/* Add to Cart Button with Icon */}
        <button className="flex items-center bg-gray-900 text-white px-3 py-2 rounded-full font-medium">
          {/* Cart Icon */}
          <span className="p-2 bg-yellow-200 rounded-full mr-4 flex items-center justify-center">
            <img
              src="https://img.icons8.com/ios-glyphs/20/null/shopping-cart.png"
              alt="cart"
            />
          </span>
          Add to Cart
        </button>
        <div className="flex items-center ml-12">
  {/* Quantity Buttons */}
  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-800">
    -
  </button>

  {/* Number "2" Button */}
  <button className="w-10 h-10 mx-4 flex items-center justify-center border border-red-300 rounded-full font-bold text-gray-900">
    2
  </button>

  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-800">
    +
  </button>
</div>

      </div>
    </div>
 


    <div className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-8 md:space-y-0">
  {/* Image Section */}
  <div className="relative">
    <img
      src={Chips}
      alt="Potato Chips"
      
      className="w-[350px] h-[430px] object-cover transform -rotate-12 mr-40"
    />
    <span className="absolute top-48 -left-25 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-md">
      Crispy & Tasty
    </span>
  </div>


{/* Chips Flavours Section */}
{/* < className="flex justify-center space-x-8 mt-8"> */}
  {/* Chip 1 */}
  <div className="flex flex-col items-center space-y-8 mt-8 mr-20">
  {/* Chip 1 */}
  <div className="flex flex-row items-center space-x-4">
    <img
      src={Smokey}
      alt="Chip Icon"
      className="w-16 h-16 rounded-full bg-gray-100 shadow-md"
    />
    <div>
      <h4 className="text-lg font-bold text-gray-800">Extra Chili</h4>
      <p className="text-sm text-gray-600">Spicy and bold flavor.</p>
    </div>
  </div>
  
  {/* Chip 2 */}
  <div className="flex flex-row items-center space-x-4">
    <img
      src={Extra}
      alt="Chip Icon"
      className="w-16 h-16 rounded-full bg-green-900 shadow-md"
    />
    <div>
      <h4 className="text-lg font-bold text-gray-800">Cheese Delight</h4>
      <p className="text-sm text-gray-600">Rich and cheesy taste.</p>
    </div>
  </div>
  
  {/* Chip 3 */}
  <div className="flex flex-row items-center space-x-4">
    <img
      src={Chilli}
      alt="Chip Icon"
      className="w-16 h-16 rounded-full bg-gray-900 shadow-md"
    />
    <div>
      <h4 className="text-lg font-bold text-gray-800">Tangy Barbecue</h4>
      <p className="text-sm text-gray-600">Smoky and tangy flavor.</p>
    </div>
  </div>
</div>

</div>
    </div>
{/* Chips Section */}
<div className="mt-2">
  <div className="mt-6">
    {/* Outer Container */}
    <div
      className="rounded-t-[30%] shadow-lg flex items-center justify-between px-4"
      style={{
        height: "130px", 
        width: "90%", 
        margin: "0 auto", 
        background: `repeating-linear-gradient(
          20deg,
          #125a4e, /* Dark Green */
          #125a4e 40px,
          #22675b 40px,
          #22675b 80px
        )`,
      }}
    >
      {/* Pair 1 */}
      <div className="flex items-center">
    
        <div className="h-30 w-20 ">
          <img
            src={Chips}
            alt="Placeholder"
            className="w-[100px] h-[70px] object-cover rounded-lg"

          />
        </div>
        <div className="h-[60px] w-[110px] bg-gray-100 flex items-center justify-center -ml-4 rounded-tr-[10%] rounded-br-[10%]">
  {/* Description Text */}
  <div className="flex flex-col items-start justify-center">
    {/* Star Ratings and Price */}
    <p className="text-xs font-semibold flex items-center space-x-2">
         <p className="text-xs font-semibold text-center">Black Barbeque<br/>
      <span className="text-yellow-400">★★★★</span>
      <span className="text-black ml-1">$12.23</span>
    </p>
    </p>
    {/* Buy Now Button */}
    <button className="mt-1 bg-red-500 text-white text-[8px] font-bold px-1 py-0.5 rounded-full">
      Buy Now
    </button>
  </div>
</div>


      </div>

           {/* Pair 1 */}
           <div className="flex items-center">
        {/* Image Div */}
        <div className="h-30 w-20 ">
          <img
            src={Chips}
            alt="Placeholder"
            className="w-[100px] h-[70px] object-cover rounded-lg"
            // className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="h-[60px] w-[100px] bg-gray-100 flex items-center justify-center -ml-4 rounded-tr-[10%] rounded-br-[10%]">
  {/* Description Text */}
  <div className="flex flex-col items-start justify-center">
    {/* Star Ratings and Price */}
    <p className="text-xs font-semibold flex items-center space-x-2">
         <p className="text-xs font-semibold text-center">Mr. Potatoes<br/>
      <span className="text-yellow-400">★★★★</span>
      <span className="text-black ml-1">$15.23</span>
    </p>
    </p>
    {/* Buy Now Button */}
    <button className="mt-1 bg-red-500 text-white text-[8px] font-bold px-1 py-0.5 rounded-full">
      Buy Now
    </button>
  </div>
</div>


      </div>
      {/* Pair 1 */}
      <div className="flex items-center">
        {/* Image Div */}
        <div className="h-30 w-20 ">
          <img
            src={Chips}
            alt="Placeholder"
            className="w-[100px] h-[70px] object-cover rounded-lg"
            // className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="h-[60px] w-[100px] bg-gray-100 flex items-center justify-center -ml-4 rounded-tr-[10%] rounded-br-[10%]">
  {/* Description Text */}
  <div className="flex flex-col items-start justify-center">
    {/* Star Ratings and Price */}
    <p className="text-xs font-semibold flex items-center space-x-1">
         <p className="text-xs font-semibold text-center">Tom Yummy<br/>
      <span className="text-yellow-400">★★★★</span>
      <span className="text-black ml-1">$16.24</span>
    </p>
    </p>
    {/* Buy Now Button */}
    <button className="mt-1 bg-red-500 text-white text-[8px] font-bold px-1 py-0.5 rounded-full">
      Buy Now
    </button>
  </div>
</div>


      </div>
    </div>
  </div>
</div>


      </main>
    </div>
  );
};

export default App;
