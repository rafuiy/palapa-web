"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import { FaCheckCircle } from 'react-icons/fa';
import Stories from "./assets/Stories-img.png";
import Client_Kementrian from "./assets/Client-1.png"
import Client_Lapas from "./assets/Client-2.png"


const features = [
  {
    title: 'Legal',
    description:
      'Layanan komunikasi ini sah secara hukum dan sesuai regulasi pemerintah, memastikan penggunaan yang aman dan terpantau.',
  },
  {
    title: 'Sistem Prabayar',
    description:
      'Menggunakan sistem prabayar yang transparan, memungkinkan WBP dan keluarga mengontrol biaya komunikasi dengan mudah.',
  },
  {
    title: 'Pemantauan Berjenjang',
    description:
      'Setiap komunikasi diawasi sesuai tingkat keamanan yang ditentukan untuk menjaga ketertiban dan mencegah penyalahgunaan.',
  },
  {
    title: 'Pemberdayaan Ekonomi Pemasyarakatan',
    description:
      'Mendukung program pemberdayaan dengan membuka peluang bagi WBP untuk kegiatan produktif dan peningkatan keterampilan.',
  },
  {
    title: 'Non DIPA',
    description:
      'Layanan ini tidak membebani anggaran negara karena dikelola dengan model bisnis mandiri tanpa menggunakan dana APBN.',
  },
];


export default function Home() {

  return (
    <div id="heroSection" className="w-full font-inter overflow-hidden">
      <Navbar/>

      {/* HERO SECTION */}
      <div className="flex flex-col mx-10 h-screen items-center">
        <div 
        className="
          flex flex-col 
          justify-center
          gap-6
          h-screen
          text-[#002453]"
        >

          <h3 className="
          w-fit
          mx-auto
          px-4 py-2
          rounded-lg
          bg-[#E7F0FD]
          text-[#639DF7] text-xs font-medium">
            PT. PALAPA TEKNOLOGI
          </h3>

          <h1 className="
          px-3 md:px-6 lg:px-10 xl:px-10 
          font-bold text-[#3D3D3D] text-700 text-5xl
          w-1/2
          mx-auto">
            Sarana Telekomunikasi Legal Pemasyarakatan
          </h1>
          <p className="font-normal 
          text-md text-center text-[#3D3D3D]
          w-3/5 
          mt-5 mx-auto
          ">
            PT. Palapa Teknologi Indonesia didirikan secara resmi pada 26 September 2005 dan bergerak di bidang
            perdagangan besar piranti lunak serta layanan teknologi informasi dan komunikasi. Sebagai anak
            perusahaan dari PT. Pasopati Nusantara Holding Company, Palapa Teknologi memiliki peran strategis
            dalam menyediakan solusi telekomunikasi yang aman, legal, dan terintegrasi.

          </p>
          <Link href="#contactSection"
              className="
              bg-[#186CE1] text-white font-normal text-center text-sm
              p-2 px-8
              w-fit
              mx-auto
              rounded-xl
              ">
            Get Started
          </Link>
        </div>
      </div>

      {/* OUR STORIES */}
      <div>
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
            px-6 py-3
            rounded-lg
            bg-[#E7F0FD]
            text-[#639DF7] text-sm font-medium">
              Our Stories
          </h3>

          <h1 className="
            px-3 
            font-bold text-[#3D3D3D] text-700 text-3xl
            
            mx-auto">
              Keunggulan Kami
          </h1>
          <div className="
          flex justify-center align-center mt-10
          ">
            {/* Img */}
            <div className="w-96 h-106 mx-10 relative">
              <Image 
                src={Stories} 
                alt="Palapa" 
                fill 
                className="rounded-xl shadow-lg shadow-gray-400/50"
              />
            </div>
            {/* Lists */}
            <div className="space-y-6 max-w-lg">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-14 h-8 bg-[#E7F0FD] rounded-full flex items-center justify-center  text-center">
                  <FaCheckCircle className="text-blue-500 text-xl" />
                </div>

              <div>
              <h3 className="font-bold text-lg text-[#3D3D3D]">{feature.title}</h3>
              <p className="font-normal text-sm text-[#3D3D3D]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* CLIENT */}
      <div>
        <div 
          className="
            flex flex-col 
            justify-center
            gap-6
            text-[#002453]
            mt-40 mb-32"
          >

          <h3 className="
            w-fit
            mx-auto
            px-6 py-3
            rounded-lg
            bg-[#E7F0FD]
            text-[#639DF7] text-sm font-medium">
              Client Kami
          </h3>

          <h1 className="
            px-3 
            font-bold text-[#3D3D3D] text-700 text-3xl
            
            mx-auto">
              Client Kebanggan Kami
          </h1>
          <div className="flex justify-around gap-20 mx-auto mt-6">
            <Image src={Client_Kementrian} alt="Logo Kementrian" className="h-56 w-56" />
            <Image src={Client_Lapas} alt="Logo Lapas" className="h-64 w-64"/>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div>
        <Footer/>
      </div>
    </div>
  );
}
// cake