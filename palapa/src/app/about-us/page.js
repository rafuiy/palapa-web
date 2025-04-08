"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IkhlasDisplay from "../components/IkhlasMap";

import Image from "next/image";
import About1 from "../assets/About-1.png";
import About2 from "../assets/About-2.png";

import Partner1 from "../assets/Partner1.png";
import Partner2 from "../assets/Partner2.png";
import Partner3 from "../assets/Partner3.png";
import Partner4 from "../assets/Partner4.png";
import Partner5 from "../assets/Partner5.png";

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
        <Navbar/>
        {/* Tentang Kami */}
        <div className="flex flex-col mx-10 mt-28 h-screen items-center">
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
                Our Stories
              </h3>

              <h1 className="
              px-3 
              font-bold text-[#3D3D3D] text-700 text-3xl
              
              mx-auto">
                Tentang Kami
            </h1>
            {/* Content */}
            <div className="flex flex-col md:flex-row items-start justify-center gap-6 mt-10">
              <div className="relative w-full md:w-[365px] h-[250px] rounded-xl overflow-hidden shadow-md">
                <Image src={About1} alt="About 1" fill className="object-cover rounded-xl" />
              </div>
              <div className="w-1/2">
                <h3 className="text-lg md:text-xl font-semibold text-[#3D3D3D] border-l-2 border-blue-500 pl-2">
                  Solusi Teknologi untuk Komunikasi di Lapas dan Rutan
                </h3>
                <p className="mt-2 text-sm text-[#3D3D3D] text-justify">
                Palapa Teknologi berfokus pada penyediaan sarana komunikasi yang mendukung kebutuhan Warga
                Binaan Pemasyarakatan (WBP) di Lembaga Pemasyarakatan (Lapas) dan Rumah Tahanan Negara
                (Rutan) di seluruh Indonesia. Perusahaan ini berkomitmen untuk mengembangkan layanan berbasis
                teknologi informasi yang memungkinkan WBP dapat berkomunikasi dengan dunia luar secara sah dan
                terpantau, sekaligus mendukung keamanan dan pengawasan di lingkungan pemasyarakatan.
                </p>
              </div>
            </div>

            {/* Content duaa */}
            <div className="flex flex-col md:flex-row items-start justify-center gap-6">
              <div className="relative w-full md:w-[365px] h-[150px] rounded-xl overflow-hidden shadow-md">
                <Image src={About2} alt="About 2" fill className="object-cover rounded-xl" />
              </div>
              <div className="w-1/2">
                <h3 className="text-lg md:text-xl font-semibold text-[#3D3D3D] border-l-2 border-blue-500 pl-2">
                  Mendukung Keamanan dan Efisiensi di Lapas dan Rutan
                </h3>
                <p className="mt-2 text-sm text-[#3D3D3D] text-justify">
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
            mx-40 mt-24">
          <h3 className="
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
              my-6
              mx-auto">
                Hasil & Kerjasama
            </h1>
          {/* Content */}
          <div className="flex gap-6">
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
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-[250px] h-[250px] rounded-xl overflow-hidden shadow-md">
                <Image src={Partner1} alt="Partner 1" fill className="object-cover rounded-xl" />
              </div>

              <div className="flex gap-4">
                <div className="relative w-[120px] h-[150px] rounded-xl overflow-hidden shadow-md">
                  <Image src={Partner2} alt="Partner 2" fill className="object-cover rounded-xl" />
                </div>
                <div className="relative w-[120px] h-[150px] rounded-xl overflow-hidden shadow-md">
                  <Image src={Partner3} alt="Partner 3" fill className="object-cover rounded-xl" />
                </div>
              </div>

              <div className="relative w-[250px] h-[92px] rounded-xl overflow-hidden shadow-md">
                <Image src={Partner4} alt="Partner 4" fill className="object-cover rounded-xl" />
              </div>

              <div className="relative w-[250px] h-[200px] rounded-xl overflow-hidden shadow-md">
                <Image src={Partner5} alt="Partner 5" fill className="object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* VISI MISII */}
        <div className="h-screen px-40 bg-[#F1F6FE] mt-40 flex flex-col justify-center">
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
              font-bold text-[#3D3D3D] text-700 text-3xl
              my-6
              mx-auto">
                Visi & Misi Kami
          </h1>

          {/* Content */}
          {/* Visi & Misi */}
          <div className="space-y-6">
            {/* Visi */}
            <div className="bg-[#FFF] p-6 rounded-xl flex gap-4 w-3/4 justify-left mx-auto">
            <RiRocket2Line className="text-2xl text-[#fff] bg-[#3882F5] rounded-full p-1 w-10 h-7" />
              <div className="flex flex-col gap-2 mb-2">
                <h3 className="text-lg font-semibold text-[#3D3D3D]">Visi Kami</h3>
                <p className="text-sm text-[#3D3D3D]">
                Palapa Teknologi memiliki visi untuk menjadi penyedia layanan telekomunikasi dan informasi handal dan terpercaya dengan kinerja prima yang berkelanjutan di Indonesia
                </p>
              </div>
              
            </div>

            {/* Misi */}
            <div className="bg-[#FFF] p-6 rounded-xl flex gap-4 w-3/4 justify-left mx-auto">
              <RiFocus2Line className="text-2xl text-[#fff] bg-[#FF4255] rounded-full p-1 mt-1" />
              <div className="flex flex-col gap-2 mb-2">
                <h3 className="text-lg font-semibold text-[#3D3D3D]">Misi Kami</h3>
                <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <RiCheckboxCircleFill className="text-[#3882F5] bg-[#E7F0FD] rounded-full p-1 w-6 h-6" />
                  <span className="text-sm text-[#3D3D3D]">Menjadi solusi teknologi informasi dan komunikasi bagi lingkungan tertutup/terbatas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <RiCheckboxCircleFill className="text-[#3882F5] bg-[#E7F0FD] rounded-full p-1 w-6 h-6" />
                  <span className="text-sm text-[#3D3D3D]">Mewujudkan sistem terintegrasi dengan pelayanan terbaik</span>
                </li>
                <li className="flex items-start gap-2">
                  <RiCheckboxCircleFill className="text-[#3882F5] bg-[#E7F0FD] rounded-full p-1 w-6 h-6" />
                  <span className="text-sm text-[#3D3D3D]">Menghadirkan teknologi informasi dan komunikasi dengan inovasi yang unggul</span>
                </li>
              </ul>
              </div>
              
              </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="
            mx-40 mt-24 flex flex-col gap-6">
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
          text-md text-left text-[#3D3D3D]
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