import React from "react";

const ProductList = () => {
  const products = [
    { name: "Black Barbeque", price: "$12.30", image: "https://via.placeholder.com/100", rating: 4.5 },
    { name: "Mr. Potato", price: "$15.89", image: "https://via.placeholder.com/100", rating: 4.0 },
    { name: "Tom Yumm", price: "$11.50", image: "https://via.placeholder.com/100", rating: 4.2 },
  ];

  return (
    <div className="bg-green-50 py-4 px-10">
      <h3 className="text-xl font-bold mb-4">Available Products</h3>
      <div className="flex space-x-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-1/4"
          >
            <img src={product.image} alt={product.name} className="w-20 h-20 mb-3" />
            <h4 className="text-lg font-bold">{product.name}</h4>
            <p className="text-yellow-500 font-semibold">${product.price}</p>
            <button className="bg-red-500 text-white px-4 py-1 rounded-lg mt-2">
              Check Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
