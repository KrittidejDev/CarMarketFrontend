import Data from "@/Shared/Data";
import React from "react";

function Category() {
  return (
    <div className="mt-2 md:mt-40">
      {/* <h2 className="font-bold text-3xl text-center mb-6 py-16"> */}
      <h2 className="font-bold text-2xl md:text-3xl text-center mb-6 py-10 md:py-16">
        Browse By Type
      </h2>

      {/* <div className="flex justify-around items-center px-16 font-bold"> */}
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center px-8 md:px-16 font-bold gap-4 md:gap-0">
        {Data.Category.map((category, index) => (
          /* <div
            key={index}
            className="border rounded-2xl p-3 w-40 items-center flex flex-col hover:shadow-lg cursor-pointer"
          > */
          <div
            key={index}
            className="border rounded-2xl p-3 w-32 md:w-40 items-center flex flex-col hover:shadow-lg cursor-pointer"
          >
            <img src={category.icon} className="w-8 h-8 md:w-9 md:h-9" />
            <h2 className="text-sm md:text-base">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
