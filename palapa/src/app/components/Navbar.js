"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/Logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full flex justify-between items-center px-14 bg-white">

      {/* Logo */}
      <div className="text-xl font-bold flex items-center">
        <Image src={Logo} className="navLogo" width={100} height={100} alt="Palapa" />
      </div>

      {/* Navbar Links */}
      <div className="flex items-center space-x-10">
        <Link href="/" className="border-2 border-blue-500 text-gray-700 text-center py-1 px-6
               rounded-tl-[10px] rounded-tr-[30px] 
               rounded-bl-[30px] rounded-br-[10px] w-auto hover:text-blue-500">
          Beranda
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500">Tentang Kami</Link>
        <Link href="/history" className="text-gray-700 hover:text-blue-500">Produk Kami</Link>
        <Link href="/history" className="text-gray-700 hover:text-blue-500">Partner Kami</Link>

        {/* Our Services Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-[#002453] text-white px-4 py-2 rounded-md flex items-center"
          >
            Hubungi Kami ▼
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-1 text-white bg-[#002453] shadow-lg rounded-md py-2 min-w-[300px]">
              <Link href="/services/visi-misi" className="block px-4 py-2 hover:bg-blue-700">Kelebihan Kami</Link>
              <Link href="/services/stories" className="block px-4 py-2 hover:bg-blue-700">Kerja sama dan Pengembangan</Link>
              <Link href="/services/products" className="block px-4 py-2 hover:bg-blue-700">Nilai-Nilai Perusahaan</Link>
              <Link href="/contact" className="block px-4 py-2 hover:bg-blue-700">Hubungi Kami</Link>
            </div>
          )}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
