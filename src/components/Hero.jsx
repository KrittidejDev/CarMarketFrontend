import React from "react";
import Search from "./Search";

function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center p-6 md:p-10 py-16 md:py-20 gap-4 md:gap-6 h-auto md:h-[650px] w-full bg-[#eef0fc]">
        {/* ปรับขนาดฟอนต์ให้เหมาะสมกับหน้าจอเล็ก */}
        <h2 className="text-base md:text-lg">
          Find cars for sale and for rent near
        </h2>
        <h2 className="text-4xl md:text-[60px] font-bold text-center">
          Find Your Dream Car
        </h2>

        {/* เรียกใช้ component Search */}
        <Search />

        {/* ปรับขนาดของรูปภาพให้ responsive */}
        <img
          src="./tesla.png"
          alt="Tesla Car"
          className="w-[80%] md:w-[50%] mt-8 md:mt-10"
        />
      </div>
    </div>
  );
}

export default Hero;
