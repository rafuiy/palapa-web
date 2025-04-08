"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { RiSearchLine, RiArrowDownSLine } from "react-icons/ri";

export default function Partner() {

    return (
      <div id="heroSection" className="w-full font-inter overflow-hidden">
        <Navbar/>
        <div className="flex flex-col my-36 items-center">
          <div 
            className="
              flex flex-col 
              justify-center
              gap-6
              text-[#002453]"
            >

              <h3 className="
              w-fit
              mx-auto
              px-4 py-2
              rounded-lg
              bg-[#E7F0FD]
              text-[#639DF7] text-xs font-medium">
                Client Kami
              </h3>

              <h1 className="
              px-3 
              font-bold text-[#3D3D3D] text-700 text-3xl
              text-center
              mx-auto">
                Partner Bisnis Kami
            </h1>
          </div>
            {/* Content */}
            {/* Searchbar */}
            <div className="flex items-center gap-8 mt-8 w-3/5">
              {/* Search Bar */}
              <div className="flex items-center w-full bg-[#F1F6FE] rounded-full px-4 py-2 shadow-sm">
                <RiSearchLine className="text-[#616161] mr-2 text-lg" />
                <input
                  type="text"
                  placeholder="Cari Lapas, cth: Lapas Kelas IIA Wanita Lampung"
                  className="bg-transparent w-full outline-none placeholder-[#616161] text-sm"
                />
              </div>

              {/* Dropdown Button */}
              <div className="flex items-center gap-2 bg-[#F1F6FE] rounded-xl px-4 py-2 shadow-sm cursor-pointer">
                <RiArrowDownSLine className="text-[#616161] text-lg" />
                <span className="text-sm text-gray-700">Lokasi</span>
              </div>
            </div>
  
            {/* table */}
            <div className="bg-[#F1F6FE]/40 backdrop-blur-lg rounded-2xl shadow-md p-10 border border-gray-200  w-3/5 mt-10">
            <h2 className="text-2xl font-bold text-#3D3D3D mb-10">Lokasi Mitra Bisnis</h2>

            <div className="grid grid-cols-2 gap-8 font-semibold text-[#3D3D3D] mb-8">
              <span>Nama Lapas</span>
              <span>Nama Kota</span>
            </div>

            <div className="space-y-2 text-sm text-[#3D3D3D] border-t pt-6">
              <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                <span>Lapas Kelas IIA Wanita Lampung</span>
                <span>Lampung</span>
              </div>
              <div className="grid grid-cols-2 gap-8 px-2 py-1">
                <span>Lapas Pekanbaru</span>
                <span>Riau</span>
              </div>
              <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                <span>Lapas Wanita Medan</span>
                <span>Sumatra Utara</span>
              </div>
              <div className="grid grid-cols-2 gap-8 px-2 py-1">
                <span>Lapas Terbuka Mataram</span>
                <span>Nusa Tenggara Barat</span>
              </div>
              <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                <span>Rutan Banda Aceh</span>
                <span>Aceh</span>
              </div>
              <div className="grid grid-cols-2 gap-8 px-2 py-1">
                <span>Lapas Kelas IIA LHOKSEUMAWE</span>
                <span>Aceh</span>
              </div>
              <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                <span>Rutan Medan</span>
                <span>Sumatra Utara</span>
              </div>
              <div className="grid grid-cols-2 gap-8 px-2 py-1">
                <span>Lapas Anak Medan</span>
                <span>Sumatra Utara</span>
              </div>
              <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                <span>Lapas Lhoksukun Ruku</span>
                <span>Sumatra Utara</span>
              </div>
              <div className="grid grid-cols-2 gap-8 px-2 py-1">
                <span>Rutan Pangkalan Brandan</span>
                <span>Sumatra Utara</span>
              </div>
              <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                <span>Lapas Sibolga</span>
                <span>Sumatra Utara</span>
              </div>
            </div>
          </div>

          
        </div>
        <Footer />
      </div>
    );
}