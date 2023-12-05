import React, { useState } from "react";

const Carousel = () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((currentItem + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentItem((currentItem - 1 + items.length) % items.length);
  };

  return (
    <div className="max-w-screen-sm mx-auto p-4 relative">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform transform translate-x-full"
          style={{ transform: `translateX(-${currentItem * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-1/3 h-40 p-4 bg-gray-200 border border-gray-300 rounded-lg mr-2"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevItem}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
      >
        {"<"}
      </button>
      <button
        onClick={nextItem}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
