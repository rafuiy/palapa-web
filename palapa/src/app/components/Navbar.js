"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/Logo.png" 

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full flex justify-between items-center p-4 bg-white">

      <div className="text-xl font-bold">
        <Image src={Logo} className="navLogo" width={100} height={100} alt="Palapa"/>
      </div>
      <div className="flex space-x-14 items-center">
        <Link href="/" className="border-2 border-blue-500 text-gray-700 text-center border-2 border-blue-500 p-1
               rounded-tl-[10px] rounded-tr-[30px] 
               rounded-bl-[30px] rounded-br-[10px] w-[100%] hover:text-blue-500">Home</Link>
        <Link href="/about" className="text-gray-70 w-[100%] hover:text-blue-500">About Us</Link>
        <Link href="/history" className="text-gray-70 hover:text-blue-500">Our History</Link>

        <div className="relative text-white">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-[#002453] px-4 py-2 rounded-md w-[150px]"
          >
            Our Services ▼
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-[#002453] shadow-lg rounded-md py-2">
              <Link href="/services/visi-misi" className="block px-4 py-2">Visi Misi</Link>
              <Link href="/services/stories" className="block px-4 py-2">Our Stories</Link>
              <Link href="/services/products" className="block px-4 py-2">Our Product</Link>
              <Link href="/contact" className="block px-4 py-2">Contact Us</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
