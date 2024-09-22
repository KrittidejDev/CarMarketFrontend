import { useUser } from "@clerk/clerk-react";
import React from "react";
import { UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      {/* ปรับขนาดของโลโก้ให้เป็น responsive */}
      <img src="./logo.svg" alt="logo" className="w-24 md:w-36 h-auto" />

      {/* เมนูสำหรับหน้าจอขนาดกลางขึ้นไป */}
      <ul className="hidden md:flex gap-8 md:gap-16">
        <li className="text-lg hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Home
        </li>
        <li className="text-lg hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Search
        </li>
        <li className="text-lg hover:scale-105 transition-all cursor-pointer hover:text-primary">
          New
        </li>
        <li className="text-lg hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Preowned
        </li>
      </ul>

      {/* เมนูสำหรับหน้าจอขนาดเล็ก */}
      <div className="md:hidden">
        <button className="text-2xl">☰</button>
      </div>

      {/* ปุ่มเมื่อผู้ใช้ล็อกอินแล้ว */}
      {isSignedIn ? (
        <div className="flex items-center gap-4 md:gap-16">
          <UserButton />
          <Link to={"/profile"}>
            <Button className="hidden md:block">Submit Listing</Button>
          </Link>
        </div>
      ) : (
        <Link to={"/profile"}>
          <Button className="hidden md:block">Submit</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
