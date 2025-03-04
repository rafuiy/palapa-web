import { FaTimes } from "react-icons/fa";

const ModalCooperation = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      {/* Container Modal */}
      <div className="relative bg-white border border-white/20 
                      p-3 md:p-5 w-[90%] max-w-4xl rounded-2xl text-left">
        
        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="absolute bg-blue-100 p-2 rounded-full top-6 right-6 
                     text-gray-500 hover:text-gray-700 shadow-md">
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <h3 className="text-sm md:text-xs px-3 mt-2 font-semibold text-gray-700">Cooperation</h3>
        <h2 className="text-lg px-3 font-bold text-blue-500 mb-6">Kerjasama Dan Pengembangan</h2>

        {/* Konten */}
        <div className="relative bg-white border border-white/20 
                        shadow-[0px_20px_35px_rgba(0,110,255,0.2)] 
                        rounded-2xl p-3 md:p-5 text-gray-700 text-[10px] md:text-xs leading-relaxed">
          
          {/* Efek Glow di Background */}
          <div className="absolute inset-0 blur-3xl opacity-40 rounded-2xl bg-blue-100"></div>

          <div className="relative">
            <p className="font-semibold">
              Palapa Teknologi telah menjalin beberapa kerjasama penting dengan Kementerian Hukum dan Hak
              Asasi Manusia Republik Indonesia melalui Direktorat Jenderal Pemasyarakatan, sebagai berikut:
            </p>
            <br />
            
            <ol className="list-decimal ml-5 space-y-3">
              <li>
                Petunjuk Pelaksanaan Direktur Bina Keamanan dan Ketertiban Direktorat Jenderal Pemasyarakatan No.: PAS.6.OT.03.01-12 Tahun 2008 tentang Penyelenggaraan Telekomunikasi Khusus (Wartelsus) pada Lembaga Pemasyarakatan, Rumah Tahanan Negara, dan Cabang Rumah Tahanan Negara di Seluruh Indonesia.
              </li>
              <li>
                Perjanjian Kerjasama antara Direktorat Bina Keamanan dan Ketertiban Direktorat Jenderal Pemasyarakatan dengan PT. Palapa Teknologi Indonesia mengenai peningkatan teknologi telekomunikasi di lingkungan pemasyarakatan.
              </li>
              <li>
                Nota Kesepahaman tentang pembangunan, pengembangan, dan pendampingan sistem pemantauan layanan telekomunikasi di lingkungan pemasyarakatan.
              </li>
              <li>
                Optimalisasi Wartelsus dan pemanfaatan IMC PAS sebagai sarana monitoring dan deteksi dini di lingkungan pemasyarakatan.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCooperation;
