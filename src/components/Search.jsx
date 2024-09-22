import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from "@/Shared/Data";

function Search() {
  return (
    <div className="p-2 md:p-5 bg-white rounded-md md:rounded-full flex flex-col md:flex-row gap-5 md:gap-10 px-5 items-center w-full md:w-[60%]">
      {/* Select สำหรับ Car */}
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-base md:text-lg">
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent className="bg-white text-base md:text-5xl">
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
      </Select>

      {/* Separator สำหรับหน้าจอขนาดใหญ่ */}
      <Separator orientation="vertical" className="hidden md:block" />

      {/* Select สำหรับ CarMakes */}
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-base md:text-lg">
          <SelectValue placeholder="CarMakes" />
        </SelectTrigger>
        <SelectContent className="bg-white text-base md:text-5xl">
          {Data.CarMakes.map((maker, index) => (
            <SelectItem key={index} value={maker.Name}>
              {maker.Name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Separator สำหรับหน้าจอขนาดใหญ่ */}
      <Separator orientation="vertical" className="hidden md:block" />

      {/* Select สำหรับ Prices */}
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-base md:text-lg">
          <SelectValue placeholder="Prices" />
        </SelectTrigger>
        <SelectContent className="bg-white text-base md:text-5xl">
          {Data.Pricing.map((pricing, index) => (
            <SelectItem key={index} value={pricing.amount}>
              {pricing.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Icon Search */}
      <div className="mt-4 md:mt-0">
        <CiSearch className="text-[30px] md:text-[50px] bg-primary rounded-full p-2 md:p-3 text-white hover:scale-105 transition-all cursor-pointer" />
      </div>
    </div>
  );
}

export default Search;
