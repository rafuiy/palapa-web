
import { LiaTimesSolid } from "react-icons/lia";

const ModalCooperation = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      {/* Container Modal */}
      <div className="relative bg-white border border-white/20 
                      p-3 pt-6 px-2 md:px-6 md:pt-8 md:pb-6 w-[95%] lg:w-[75%] xl:w-[65%] rounded-2xl text-left">
        
        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="absolute bg-blue-100 p-1 rounded-full top-6 right-6 
                     text-gray-500 hover:text-gray-700 shadow-md">
          <LiaTimesSolid size={10} />
        </button>

        {/* Header */}
        <h3 className="text-sm md:text-xs px-3 font-semibold text-gray-700">Cooperation</h3>
        <h2 className="text-xs md:text-xl px-3 font-semibold text-blue-500 mt-2 mb-2">Kerjasama Dan Pengembangan</h2>

        {/* Konten */}
        <div className="relative bg-white border border-white/20 
                        shadow-[0px_20px_35px_rgba(0,110,255,0.5)] 
                        rounded-2xl p-3 md:p-4 lg:p-7 text-[#002453] text-xs md:text-xs
                        max-h-80 md:max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
          
          {/* Efek Glow di Background */}
          {/* <div className="absolute inset-0 blur-3xl opacity-40 rounded-2xl bg-blue-100"></div> */}

          <div className="relative">
            <p className="font-semibold">
            Palapa Teknologi telah menjalin beberapa kerjasama penting dengan Kementerian Hukum dan Hak
            Asasi Manusia Republik Indonesia melalui Direktorat Jenderal Pemasyarakatan, sebagai berikut:
            </p>
            <br />
            
            <ol className="list-decimal ml-5 space-y-3">
              <li>
              Petunjuk Pelaksana Direktur Bina Keamanan dan Ketertiban Direktorat Jenderal
              Pemasyarakatan No : PAS.6.OT.03,01- 12 Tahun 2008 tentang Penyelenggaraan
              Telekomunikasi Khusus (Wartelsus0 Pada Lembaga Pemasyarakatan, Rumah Tahanan Negara
              dan Cabang Rumah Tahanan Negara di Seluruh Indonesia
              </li>
              <li>
              Perjanjian Kerjasama antara Direktorat Bina Keamanan dan Ketertiban Direktorat Jenderal
              Pemasyarakatan dengan PT. Palapa Teknologi Indonesia, nomor : PAS2.DL.02.02.03-249 dan
              nomor 001/PTI–DTJENPAS/IV /2012, tanggal 05 September 2012 tentang Peningkatan
              Teknologi Telekomunikasi dan Informasi Integrated Wartelsus (I-Wartelsus) Pada Kantor
              Pusat Direktorat Jenderal Pemasyarakatan, Divisi Pemasyarakatan dan Unit Pelaksana Teknis
              Pemasyarakatan di Seluruh Indonesia.              
              </li>
              <li>
              Nota Kesepahaman antara Direktorat Jenderal Pemasyarakatan dan PT. Palapa Teknologi
              Indonesia, nomor PAS-31.HM.05.03 Th 2016 dan nomor PTI-DITJENPAS/MOU/2016/IV-
              001, tanggal 27 April 2016 tentang Pembangunan, Pengembangan dan Pendampingan Serta
              Pengaman Sistem Telekomunikasi dalam rangka layanan Pemasyarakatan berbasis Teknologi
              Informasi.
              </li>
              <li>
              Perjanjian Kerjasama Antara Direktorat Jenderal Pemasyarakatan Kementrian Hukum dan Hak
              Asasi Manusia dengan PT. Palapa Teknologi Indonesia Nomor PAS-10.HH.05.05 Tahun 2021
              dan No 013/PKS-DITJENPAS/IV/2021 tanggal 27 April 2021 tentang Optimalisasi I-
              Wartelsus dan Pemanfaatan IMC PAS Sebagai Sarana Monitoring dan Deteksi Dini
              Pemasyarakatan
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCooperation;
