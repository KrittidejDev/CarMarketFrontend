import React from "react";
import { LuFuel } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";

function CarItem({ car }) {
  return (
    <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
      <img
        alt=""
        src={car.image}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">${car.price}</dd>
          </div>

          <div>
            <dt className="sr-only">Name</dt>

            <dd className="font-medium">{car.name}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <LuFuel className="text-lg mb-1 md:mb-2" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Fuel</p>

              <p className="font-medium">{car.fuelType}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <IoSpeedometerOutline className="text-lg mb-1 md:mb-2" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Miles</p>

              <p className="font-medium">{car.miles}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <GiGearStickPattern className="text-lg mb-1 md:mb-2" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Gear</p>

              <p className="font-medium">{car.gearType}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CarItem;
