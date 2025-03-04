import { FaTimes } from "react-icons/fa";

const ModalAboutUs = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      {/* Container Modal */}
      <div className="relative bg-white p-3 md:p-5 w-[90%] max-w-3xl rounded-2xl shadow-lg">
        {/* Tombol Close */}
        <button onClick={onClose} className="absolute bg-blue-100 p-1 rounded-2xl top-4 right-4 text-gray-500 hover:text-gray-700">
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <h3 className="text-xs px-3 mt-2 font-semibold text-gray-700">Cerita Kami</h3>
        <h2 className="text-lg px-3 font-bold text-blue-400 mb-4">About Us</h2>

        {/* Konten */}
        <div className="bg-white shadow-[10px_10px_35px_rgba(0,110,255,0.3)] rounded-2xl p-3 md:p-5 text-gray-700 text-sm leading-relaxed border border-gray-100 relative">
          <div className="absolute inset-0 blur-2xl opacity-30 rounded-2xl"></div>
          <div className="relative text-[10px] md:text-sm">
            <p>
              <strong>Palapa Teknologi</strong> didirikan secara resmi pada 26 September 2005 dan bergerak di bidang
              perdagangan besar piranti lunak serta layanan teknologi informasi dan komunikasi. Sebagai anak perusahaan
              dari PT. Pasopati Nusantara Holding Company, Palapa Teknologi memiliki peran strategis dalam menyediakan
              solusi telekomunikasi yang aman, legal, dan terintegrasi.
            </p>
            <br />
            <p>
              <strong>Palapa Teknologi</strong> berfokus pada penyediaan sarana komunikasi yang mendukung kebutuhan Warga
              Binaan Pemasyarakatan (WBP) di Lembaga Pemasyarakatan (Lapas) dan Rumah Tahanan Negara (Rutan) di seluruh
              Indonesia. Perusahaan ini berkomitmen untuk mengembangkan layanan berbasis teknologi informasi yang
              memungkinkan WBP dapat berkomunikasi dengan dunia luar secara sah dan terpantau.
            </p>
            <br />
            <p>
              Dengan inovasi yang terus berkembang, Palapa Teknologi menjadi mitra penting bagi pemerintah dalam
              mewujudkan pemasyarakatan yang lebih transparan, aman, dan efisien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAboutUs;
