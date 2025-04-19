"use client";
import Image from "next/image";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Product1 from "../assets/iWartel.png";
import Product2 from "../assets/Imcpas.png";
import Product3 from "../assets/Paypas.png";

export default function Product() {
   
    return (
      <div id="heroSection" className="w-full font-inter ">
        <Navbar/>
        <div className="flex flex-col mx-6 md:mx-10 mt-20 md:mt-36 items-center">
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
                Produk layanan Kami
              </h3>

              <h1 className="
              px-3 
              font-bold text-[#3D3D3D] text-700 text-xl md:text-3xl
              text-center
              mx-auto">
                Solusi Digital Terdepan Untuk<br/>Komunikasi Efektif 
            </h1>

            {/* OUR PRODUCT TABLET & DESKTOP*/}
                  <div className="flex flex-col md:px-6 lg:px-14 md:flex overflow-visible">
            
                    {/* WARTELSUS */}
                    <div className="flex flex-col-reverse md:flex-row-reverse mt-10 gap-4 md:gap-16"
                    >
                      <div className="flex flex-col md:flex-col w-full md:w-[50%] text-[#3D3D3D] text-xl">
                        <h1 className="text-2xl md:text-xl lg:text-3xl font-semibold text-[#3D3D3D] mt-20 md:mt-10">I-Wartelsus</h1>
                        <p className="mt-5 text-sm md:text-xs lg:text-sm">adalah Integrated Warung Telekomunikasi Khusus yaitu fasilitas telekomunikasi
                          berbasis teknologi data yang terintegrasi on line secara nasional dalam sistem komunikasi
                          berbentuk voice call dan video call serta layanan komunikasi dan informasi lainnya, sebagai
                          media komunikasi legal yang terpantau, aman, nyaman dan tidak melanggar ketentuan yang
                          berlaku bagi Warga Binaan Pemasyarakatan pada Unit Pelaksana Teknis Pemasyarakatan.</p>
                       
                      </div>
            
                      
                      <div className="relative flex justify-center items-center w-3/4 mx-auto md:w-[40%] py-0">
                      <div className="absolute -z-10 w-3/4 h-3/4 bg-blue-200 opacity-100 blur-3xl rounded-full"></div> {/* Efek Glow */}
                        <div className="glass-white rounded-xl p-6  shadow-[10px_20px_80px_rgba(80,110,255,0.5)]">
                          <Image src={Product1} objectFit="contain" alt="I-Wartelsus" className="h-auto text-center  rounded-xl  " />
                        </div>
                      </div>
                    </div>
            
                    {/* IMC PAS */}
                    <div className="flex flex-col-reverse md:flex-row mt-20 gap-4 md:gap-16"
                    >
                      <div className="flex flex-col md:w-[50%] text-[#3D3D3D] text-xl">
                        <h1 className="text-2xl md:text-xl lg:text-3xl font-semibold text-[#3D3D3D] mt-20 md:mt-10">IMC Pas (Integrated Monitoring Pemasyarakatan Center)</h1>
                        <p className="mt-5 text-sm md:text-xs lg:text-sm">adalah fasilitas pusat pemantauan berbasis teknologi data yang terintegrasi on line
                        secara nasional sebagai media monitoring dan deteksi dini Pemasyarakatan. Fasilitas ini
                        berbasis teknologi informasi yang terhubung secara online di seluruh wilayah nasional,
                        memungkinkan pemantauan secara terintegrasi. IMC Pas bertujuan untuk meningkatkan
                        efektivitas pengawasan, meminimalkan risiko, serta memastikan pelaksanaan program
                        pembinaan dan pengawasan yang lebih optimal di lingkungan pemasyarakatan. Sebagai media
                        monitoring, IMC Pas berfungsi untuk memberikan data yang real-time dan mendukung
                        pengambilan keputusan yang tepat dalam sistem pemasyarakatan.</p>
                      </div>
            
                      
                      <div className="relative flex justify-center items-center w-3/4 md:w-[40%] mx-auto py-0">
                      <div className="absolute -z-10 w-3/4 h-3/4 bg-blue-200 opacity-100 blur-3xl rounded-full"></div> {/* Efek Glow */}
                        <div className="lass-white rounded-xl p-6  shadow-[10px_20px_80px_rgba(80,110,255,0.5)]">
                          <Image src={Product2} objectFit="contain" alt="I-Wartelsus" className="h-auto text-center  rounded-xl  " />
                        </div>
                      </div>
                    </div>
            
                    {/* PAYPAS */}
                    <div className="flex flex-col-reverse md:flex-row-reverse my-20 mt-20 lg:mt-40 gap-4 md:gap-16"
                    >
                      <div className="flex flex-col md:w-[50%] text-[#3D3D3D] text-xl">
                        <h1 className="text-xl md:text-lg lg:text-3xl font-semibold text-[#3D3D3D] mt-20 md:mt-0 lg:mt-10">Paypas (Payment Pemasyarakatan)</h1>
                        <p className="mt-5 text-sm md:text-xs lg:text-sm">Paypas (Payment Pemasyarakatan) adalah sistem pembayaran elektronik yang memanfaatkan
                          virtual account dan teknologi biometrik untuk memastikan transaksi yang aman, efisien, dan
                          terkontrol di lingkungan pemasyarakatan.</p>
                      </div>
            
                      
                      <div className="relative flex justify-center items-center w-3/4 md:w-[40%] mx-auto py-0">
                      <div className="absolute -z-10 w-3/4 h-3/4 bg-blue-200 opacity-100 blur-3xl rounded-full"></div> {/* Efek Glow */}
                        <div className="glass-white rounded-xl p-6  shadow-[10px_20px_80px_rgba(80,110,255,0.5)]">
                          <Image src={Product3} objectFit="contain" alt="I-Wartelsus" className="h-auto text-center  rounded-xl  " />
                        </div>
                      </div>
                    </div>
                    
                  </div>
            
                  
          </div>
        </div>
        <Footer />


        
      </div>
    );
}