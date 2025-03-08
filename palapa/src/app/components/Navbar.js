"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "@/app/assets/Logo.png";
import { FiBriefcase , FiInfo, FiShoppingBag, FiPhone } from "react-icons/fi"; // Ikon dari react-icons

const Navbar = () => {
  // State untuk menyimpan tombol yang sedang aktif
  const [activeSection, setActiveSection] = useState("#heroSection");

  // Fungsi untuk mengubah tombol yang aktif
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      {/* Navbar Desktop */}
      <nav className="fixed top-0 z-50 w-full flex justify-between items-center px-8 py-2 xl:py-1 bg-white hidden md:flex">
        {/* Logo */}
        <div className="text-md font-bold flex items-center">
          <Image src={Logo} className="navLogo" width={80} height={80} alt="Palapa" />
        </div>

        {/* Navbar Links */}
        <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-10 text-sm md:text-xs lg:text-md xl:text-[15px] font-normal">
          <a
            href="#heroSection"
            onClick={() => handleNavClick("#heroSection")}
            className={`text-[#002453] text-center py-2 md:py-1 px-6 md:px-4 rounded-tl-[10px] rounded-tr-[30px] 
                rounded-bl-[30px] rounded-br-[10px] w-auto hover:text-blue-500 transition-all duration-300 ${
                  activeSection === "#heroSection" ? "border-2 border-blue-500" : ""
                }`}
          >
            Beranda
          </a>
          <a
            href="#aboutSection"
            onClick={() => handleNavClick("#aboutSection")}
            className={`text-[#002453] text-center py-2 md:py-1 px-6 md:px-4 rounded-tl-[10px] rounded-tr-[30px] 
              rounded-bl-[30px] rounded-br-[10px] w-auto hover:text-blue-500 transition-all duration-300 ${
                activeSection === "#aboutSection" ? "border-2 border-blue-500" : ""
              }`}
          >
            Tentang Kami
          </a>
          <a
            href="#productSection"
            onClick={() => handleNavClick("#productSection")}
            className={`text-[#002453] text-center py-2 md:py-1 px-6 md:px-4 rounded-tl-[10px] rounded-tr-[30px] 
              rounded-bl-[30px] rounded-br-[10px] w-auto hover:text-blue-500 transition-all duration-300 ${
                activeSection === "#productSection" ? "border-2 border-blue-500" : ""
              }`}
          >
            Produk
          </a>
          <a
            href="#partnerSection"
            onClick={() => handleNavClick("#partnerSection")}
            className={`text-[#002453] text-center py-2 md:py-1 px-6 md:px-4 rounded-tl-[10px] rounded-tr-[30px] 
              rounded-bl-[30px] rounded-br-[10px] w-auto hover:text-blue-500 transition-all duration-300 ${
                activeSection === "#partnerSection" ? "border-2 border-blue-500" : ""
              }`}
          >
            Partner
          </a>

          {/* Tombol "Hubungi Kami" */}
          <a
            href="#contactSection"
            onClick={() => handleNavClick("#contactSection")}
            className={`bg-blue-500 text-white font-normal px-6 py-2 rounded-lg flex items-center hover:text-gray-200 transition-all duration-300 ${
              activeSection === "#contactSection" ? "ring-2 ring-blue-300" : ""
            }`}
          >
            Hubungi Kami
          </a>
        </div>
      </nav>

      {/* Navbar Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-t-md py-2 flex justify-around items-center z-50 border-t">
        {/* <a
          href="#heroSection"
          onClick={() => handleNavClick("#heroSection")}
          className={`flex flex-col items-center ${
            activeSection === "#heroSection" ? "text-blue-600 border-t-2 border-blue-500 pt-1" : "text-gray-600"
          }`}
        >
          <FiHome className="text-2xl" />
          <span className="text-xs">Beranda</span>
        </a> */}
        <a
          href="#aboutSection"
          onClick={() => handleNavClick("#aboutSection")}
          className={`flex flex-col items-center ${
            activeSection === "#aboutSection" ? "text-blue-600 border-t-2 border-blue-500 pt-1" : "text-gray-600"
          }`}
        >
          <FiInfo className="text-2xl" />
          <span className="text-xs">Tentang</span>
        </a>
        <a
          href="#productSection"
          onClick={() => handleNavClick("#productSection")}
          className={`flex flex-col items-center ${
            activeSection === "#productSection" ? "text-blue-600 border-t-2 border-blue-500 pt-1" : "text-gray-600"
          }`}
        >
          <FiShoppingBag className="text-2xl" />
          <span className="text-xs">Produk</span>
        </a>
        <a
          href="#partnerSection"
          onClick={() => handleNavClick("#partnerSection")}
          className={`flex flex-col items-center ${
            activeSection === "#partnerSection" ? "text-blue-600 border-t-2 border-blue-500 pt-1" : "text-gray-600"
          }`}
        >
          <FiBriefcase className="text-2xl" />
          <span className="text-xs">Partner</span>
        </a>
        <a
          href="#contactSection"
          onClick={() => handleNavClick("#contactSection")}
          className={`flex flex-col items-center ${
            activeSection === "#contactSection" ? "text-blue-600 border-t-2 border-blue-500 pt-1" : "text-gray-600"
          }`}
        >
          <FiPhone className="text-2xl" />
          <span className="text-xs">Hubungi</span>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
