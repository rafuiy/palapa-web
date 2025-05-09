"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IkhlasDisplay from "../components/IkhlasMap";

import Image from "next/image";
import About1 from "../assets/ImageUs1.jpg";
import About2 from "../assets/ImageUs4.jpg";

import Partner1 from "../assets/ImageUs2.jpg";
import Partner2 from "../assets/ImageUs3.jpg";
import Partner3 from "../assets/ImageUs5.jpg";
import Partner4 from "../assets/ImageUs7.jpg";
import Partner5 from "../assets/ImageUs6.jpg";

import { RiRocket2Line, RiFocus2Line, RiCheckboxCircleFill } from "react-icons/ri";

const partnerships = [
  {
    title: "Petunjuk Pelaksana Wartelsus di Lapas dan Rutan (PAS.6 Tahun 2008)",
    description:
      "Petunjuk Pelaksana Direktur Bina Keamanan dan Ketertiban Direktorat Jenderal Pemasyarakatan No : PAS.6.OT.03,01- 12 Tahun 2008 tentang Penyelenggaraan Telekomunikasi Khusus (Wartelsus0 Pada Lembaga Pemasyarakatan, Rumah Tahanan Negara dan Cabang Rumah Tahanan Negara di Seluruh Indonesia",
  },
  {
    title: "Perjanjian I–Wartelsus Ditjen PAS & PT Palapa (2012)",
    description:
      "Perjanjian Kerjasama antara Direktorat Bina Keamanan dan Ketertiban Direktorat Jenderal Pemasyarakatan dengan PT. Palapa Teknologi Indonesia, nomor : PAS2.DL.02.02.03-249 dan nomor 001/PTI–DTJENPAS/IV /2012, tanggal 05 September 2012 tentang Peningkatan Teknologi Telekomunikasi dan Informasi Integrated Wartelsus (I-Wartelsus) Pada Kantor Pusat Direktorat Jenderal Pemasyarakatan, Divisi Pemasyarakatan dan Unit Pelaksana Teknis Pemasyarakatan di Seluruh Indonesia.",
  },
  {
    title: "MoU Telekomunikasi Pemasyarakatan Ditjen PAS & PT Palapa (2016)",
    description:
      "Nota Kesepahaman antara Direktorat Jenderal Pemasyarakatan dan PT. Palapa Teknologi Indonesia, nomor PAS-31.HM.05.03 Th 2016 dan nomor PTI-DITJENPAS/MOU/2016/IV-001, tanggal 27 April 2016 tentang Pembangunan, Pengembangan dan Pendampingan Serta Pengaman Sistem Telekomunikasi dalam rangka layanan Pemasyarakatan berbasis Teknologi Informasi.",
  },
  {
    title: "Perjanjian Optimalisasi i–Wartelsus & IMC PAS (2021)",
    description:
      "Perjanjian Kerjasama Antara Direktorat Jenderal Pemasyarakatan Kementrian Hukum dan Hak Asasi Manusia dengan PT. Palapa Teknologi Indonesia Nomor PAS-10.HH.05.05 Tahun 2021 dan No 013/PKS-DITJENPAS/IV/2021 tanggal 27 April 2021 tentang Optimalisasi I-Wartelsus dan Pemanfaatan IMC PAS Sebagai Sarana Monitoring dan Deteksi Dini Pemasyarakatan",
  },
];

export default function AboutUs() {

    return (
      <div className="w-full font-inter overflow-hidden">
        <div className="">
        <Navbar/>
        </div>
        {/* Tentang Kami */}
        <div className="flex flex-col mx-6 md:mx-10 mt-20 md:mt-10 lg:mt-28 md:h-screen items-center">
          <div 
            className="
              flex flex-col 
              justify-center
              gap-6
              md:h-screen
              text-[#002453]"
            >

              <h3 className="
              w-fit
              mx-auto
              px-4 py-2
              rounded-lg
              bg-[#E7F0FD]
              text-[#639DF7] text-xs font-medium">
                Our Stories
              </h3>

              <h1 className="
              px-3 
              font-bold text-[#3D3D3D] text-700 text-3xl md:text-3xl
              
              mx-auto">
                Tentang Kami
            </h1>
            {/* Content */}
            <div className="flex flex-col md:flex-row items-start justify-center gap-6 mt-10">
            <div className="md:hidden relative w-full h-[200px] rounded-xl overflow-hidden shadow-md">
                <Image src={About2} alt="About 2" fill className="object-cover rounded-xl" />
              </div>
              <div className="hidden md:flex relative w-6 h-6 md:w-[300px] lg:w-[365px] md:h-[250px] rounded-xl overflow-hidden shadow-md">
                <Image src={About1} alt="About 1" fill className="object-cover rounded-xl" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-lg md:text-sm lg:text-xl w-full md:w-full font-semibold md:font-bold text-[#3D3D3D] border-l-2 border-blue-500 pl-2">
                  Solusi Teknologi untuk Komunikasi di Lapas dan Rutan
                </h3>
                <p className="mt-2 text-sm md:text-xs xl:text-sm text-[#3D3D3D] text-justify">
                Palapa Teknologi berfokus pada penyediaan sarana komunikasi yang mendukung kebutuhan Warga
                Binaan Pemasyarakatan (WBP) di Lembaga Pemasyarakatan (Lapas) dan Rumah Tahanan Negara
                (Rutan) di seluruh Indonesia. Perusahaan ini berkomitmen untuk mengembangkan layanan berbasis
                teknologi informasi yang memungkinkan WBP dapat berkomunikasi dengan dunia luar secara sah dan
                terpantau, sekaligus mendukung keamanan dan pengawasan di lingkungan pemasyarakatan.
                </p>
              </div>
            </div>

            {/* Content duaa */}
            <div className="flex flex-col md:flex-row items-start justify-center gap-6 mt-10 md:mt-0">
              <div className="hidden md:flex relative w-full md:w-[300px] lg:w-[365px] h-[150px] rounded-xl overflow-hidden shadow-md">
                <Image src={About2} alt="About 2" fill className="object-cover  rounded-xl" />
              </div>
              <div className="md:hidden relative w-full md:w-[300] lg:w-[365px] h-[150px] object-cover object-bottom rounded-xl overflow-hidden shadow-md">
                <Image src={About1} alt="About 2" fill className=" object-cover rounded-xl" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-lg md:text-sm lg:text-xl font-semibold text-[#3D3D3D] border-l-2 border-blue-500 pl-2">
                  Mendukung Keamanan dan Efisiensi di Lapas dan Rutan
                </h3>
                <p className="mt-2 text-sm md:text-xs xl:text-sm text-[#3D3D3D] text-justify">
                Dengan inovasi yang terus berkembang, Palapa Teknologi menjadi mitra penting bagi pemerintah
                dalam mewujudkan pemasyarakatan yang lebih transparan, aman, dan efisien, serta mendukung tugas
                pokok Direktorat Jenderal Pemasyarakatan (Ditjenpas) dalam menjaga ketertiban dan mencegah
                peredaran narkoba dan pelanggaran hukum lainnya.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hasil dan Kerjaasama */}
        <div className="
            mr-6 md:mx-14 lg:mx-40 mt-24">
          <h3 className="
            hidden
            md:flex
            w-fit
            mt-6
            px-4 py-2
            rounded-lg
            bg-[#E7F0FD]
            text-[#639DF7] text-xs font-medium">
              Results & Collaboration
          </h3>
          <h1 className="
              font-bold text-[#3D3D3D] text-700 text-3xl
              hidden
              md:flex
              my-6
              mx-auto">
                Hasil & Kerjasama
            </h1>
          {/* Content */}
          <div className="flex gap-6 flex-row-reverse md:flex-row ">
            {/* Text */}
            <div className="flex flex-col gap-6">
              {partnerships.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#639DF7] p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-base font-bold text-[#3D3D3D] mb-2 border-l-2 border-[#639DF7] pl-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#3D3D3D] text-justify">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="flex flex-col items-center gap-6 md:gap-4 ">
              <div className="relative w-[150px] h-[455px] md:w-[200px] md:h-[400px] lg:w-[250px] lg:h-[450px] rounded-xl overflow-hidden shadow-md">
                <Image src={Partner1} alt="Partner 1" fill className="object-cover rounded-xl" />
              </div>

              <div className="flex flex-col md:flex-row gap-3 ">
                <div className="relative w-[150px] h-[570px] md:w-[90px] md:h-[150px] lg:w-[120px] lg:h-[150px] rounded-xl overflow-hidden shadow-md">
                  <Image src={Partner2} alt="Partner 2" fill className="object-cover rounded-xl" />
                </div>
                <div className="relative w-[150px] h-[495px] md:w-[90px] md:h-[150px] lg:w-[120px] lg:h-[150px] rounded-xl overflow-hidden shadow-md">
                  <Image src={Partner3} alt="Partner 3" fill className="object-cover rounded-xl" />
                </div>
              </div>

              <div className="hidden md:flex relative w-[215px] h-[92px] lg:w-[250px] lg:h-[92px] xl:h-[108px] rounded-xl overflow-hidden shadow-md">
                <Image src={Partner4} alt="Partner 4" fill className="object-cover rounded-xl" />
              </div>

              <div className="relative xl:hidden  w-[150px] h-[495px] md:w-[215px] md:h-[400px] lg:w-[250px] lg:h-[415px] rounded-xl overflow-hidden shadow-md">
                <Image src={Partner5} alt="Partner 5" fill className="object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* VISI MISII */}
        <div className="md:h-screen md:px-28 lg:px-40 md:bg-[#F1F6FE] mt-40 flex flex-col justify-center">
          <h3 className="
            w-fit
            mx-auto
            px-4 py-2
            rounded-lg
            bg-[#E7F0FD]
            text-[#639DF7] text-xs font-medium">
              Visi & Mission
          </h3>
          <h1 className="
              font-bold text-[#3D3D3D] text-700 text-2xl md:text-3xl
              my-6
              mb-10 md:mb-6
              mx-auto">
                Visi & Misi Kami
          </h1>

          {/* Content */}
          {/* Visi & Misi */}
          <div className="space-y-6 bg-[#F1F6FE] py-6 px-6 md:mt-3">
            {/* Visi */}
            <div className="bg-[#FFF] p-6 rounded-xl flex gap-4 w-full lg:w-3/4 justify-left mx-auto">
            <RiRocket2Line className="text-2xl text-[#fff] bg-[#3882F5] rounded-full p-2 md:p-2 w-40 h-12 md:w-14 md:h-8 xl:w-12 xl:h-9" />
              <div className="flex flex-col gap-2 mb-2">
                <h3 className="text-lg font-semibold text-[#3D3D3D] mt-3 md:mt-0">Visi Kami</h3>
                <p className="text-sm md:text-xs xl:text-sm text-[#3D3D3D]">
                  Palapa Teknologi memiliki visi untuk menjadi penyedia layanan telekomunikasi dan Informasi handal
                  dan terpercaya dengan kinerja prima yang berkelanjutan di Indonesia
                </p>
              </div>
              
            </div>

            {/* Misi */}
            <div className="bg-[#FFF] p-6 rounded-xl flex gap-4 w-full lg:w-3/4 justify-left mx-auto">
              <RiFocus2Line className="w-24 h-12 md:w-10 md:h-9 xl:w-9 md:text-2xl text-[#fff] bg-[#FF4255] rounded-full p-2 md:p-2 mt-1 md:mt-0" />
              <div className="flex flex-col gap-2 mb-2 mt-4 md:mt-1">
                <h3 className="text-lg font-semibold text-[#3D3D3D]">Misi Kami</h3>
                <ul className="space-y-2 mt-2">
                <li className="flex items-center md:items-start gap-2">
                  <RiCheckboxCircleFill className="text-[#3882F5] bg-[#E7F0FD] rounded-full p-1 w-16 md:w-8 h-8 md:h-6 lg:w-7 xl:w-6" />
                  <span className="text-sm md:text-xs xl:text-sm text-[#0A2E61] md:mt-1 xl:mt-0">Menjadi solusi teknologi informasi dan komunikasi bagi lingkungan tertutup/terbatas.</span>
                </li>
                <li className="flex items-center md:items-start gap-2">
                  <RiCheckboxCircleFill className="text-[#3882F5] bg-[#E7F0FD] rounded-full p-1 w-12 md:w-6 h-8 md:h-6" />
                  <span className="text-sm md:text-xs xl:text-sm text-[#0A2E61] md:mt-1 xl:mt-0">Mewujudkan sistem terintegrasi dengan pelayanan terbaik</span>
                </li>
                <li className="flex items-center md:items-start gap-2">
                  <RiCheckboxCircleFill className="text-[#3882F5] bg-[#E7F0FD] rounded-full p-1 w-16 md:w-8 h-8 md:h-6 lg:w-7 xl:w-6" />
                  <span className="text-sm md:text-xs xl:text-sm text-[#0A2E61] md:mt-1 xl:mt-0">Menghadirkan teknologi informasi dan komunikasi dengan inovasi yang unggul</span>
                </li>
              </ul>
              </div>
              
              </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="hidden
            md:mx-14 lg:mx-40 mt-24 md:flex flex-col gap-6">
          <h3 className="
              w-fit
              mx-auto
              px-4 py-2
              rounded-lg
              bg-[#E7F0FD]
              text-[#639DF7] text-xs font-medium">
                Company Values
          </h3>

          <h1 className="
              px-3 
              font-bold text-[#3D3D3D] text-3xl
              w-fit
              mx-auto">
                Nilai-Nilai Perusahaan
          </h1>
          <p className="font-normal 
          text-xs lg:text-md text-left text-[#3D3D3D]
          w-3/4 
           mx-auto
          ">
            PT Pasopati Nusantara menjunjung tinggi nilai-nilai yang menjadi landasan dalam setiap kegiatan dan
            keputusan bisnis perusahaan. Nilai-nilai ini tidak hanya menjadi pedoman dalam berinteraksi dengan
            klien dan mitra, tetapi juga dalam membangun budaya perusahaan yang sehat dan produktif. Berikut
            adalah nilai-nilai yang dipegang teguh oleh PT Pasopati Nusantara:
          </p>

              {/* VALUE ICON */}
          <IkhlasDisplay />
        </div>

        <Footer/>
      </div>
    );
}