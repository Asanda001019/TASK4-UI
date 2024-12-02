import React from "react";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-green-600">SunMall</h1>
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
  <button className="w-10 h-10 mx-4 flex items-center justify-center border border-red-500 rounded-full font-bold text-red-500">
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
      src="https://via.placeholder.com/300x400"
      alt="Potato Chips"
      className="w-100 transform -rotate-6 shadow-lg mr-40"
    />
    <span className="absolute top-10 left-10 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-md">
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
      src="https://via.placeholder.com/50"
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
      src="https://via.placeholder.com/50"
      alt="Chip Icon"
      className="w-16 h-16 rounded-full bg-gray-100 shadow-md"
    />
    <div>
      <h4 className="text-lg font-bold text-gray-800">Cheese Delight</h4>
      <p className="text-sm text-gray-600">Rich and cheesy taste.</p>
    </div>
  </div>
  
  {/* Chip 3 */}
  <div className="flex flex-row items-center space-x-4">
    <img
      src="https://via.placeholder.com/50"
      alt="Chip Icon"
      className="w-16 h-16 rounded-full bg-gray-100 shadow-md"
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
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800">Our Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Example Card */}
            {[
              { name: "Black Barbeque", price: "$12.30" },
              { name: "Mr. Potato", price: "$16.50" },
              { name: "Tom Yumm", price: "$11.50" },
            ].map((product) => (
              <div
                key={product.name}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt={product.name}
                  className="w-40"
                />
                <h4 className="text-lg font-semibold mt-4">{product.name}</h4>
                <p className="text-green-600 font-medium">{product.price}</p>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
