import React from "react";

const ProductShowcase = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5 bg-[#fdf5e6]">
      <div className="w-1/2 space-y-4">
        <h2 className="text-4xl font-bold">Eat Our Grilled Potato Chips</h2>
        <p className="text-gray-700">
          Satisfying savory Chinese meat sauce chips without any hard-to-find
          ingredients.
        </p>
        <div className="flex items-center space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
            <img
              src="https://img.icons8.com/ios-glyphs/30/null/shopping-basket-2.png"
              alt="cart"
              className="mr-2"
            />
            Add to Cart
          </button>
          <div className="flex items-center border rounded-lg px-3 py-1">
            <button className="text-2xl font-bold">-</button>
            <span className="mx-3">2</span>
            <button className="text-2xl font-bold">+</button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src="https://via.placeholder.com/300x400.png?text=Chips+Showcase"
          alt="chips"
          className="shadow-lg rounded-xl"
        />
      </div>
    </div>
  );
};

export default ProductShowcase;
