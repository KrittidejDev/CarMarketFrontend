import FakeData from "../Shared/FakeData";
import React from "react";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MostSearchedCar() {
  console.log(FakeData.carList);
  return (
    <div className="mx-4 md:mx-24">
      {/* ปรับขนาดของ header ให้เหมาะสมกับหน้าจอเล็ก */}
      <h2 className="font-bold text-2xl md:text-3xl text-center mt-10 md:mt-16 mb-5 md:mb-7">
        Most Searched Car
      </h2>

      <Carousel>
        <CarouselContent>
          {FakeData.carList.map((car, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/4 p-2"
            >
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchedCar;
