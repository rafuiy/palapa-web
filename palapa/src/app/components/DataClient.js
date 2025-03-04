import { useState, useEffect, useRef } from "react";

export default function DataClient() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null); // Ref untuk mendeteksi klik di dalam dropdown

  const cityData = {
    "Lapas Aceh": ["LPKA Banda Aceh", "Lapas Kelas IIA Lhokseumawe", "Lapas Banda Aceh"],
    "Lapas Sumatra Utara": [
      "Rutan Medan",
      "Lapas Kelas IIA Binjai",
      "Lapas Kelas IIA Pematangsiantar",
      "Lapas Kelas IIA Tanjungbalai",
      "Lapas Kelas IIA Labuhan Ruku",
      "Lapas Gunungsitoli",
      "Lapas Pancur Batu",
      "Rutan Balige",
      "Rutan Tarutung",
      "Rutan Padangsidimpuan",
    ],
    "Lapas Sumatra Barat": ["Lapas Kelas IIA Taluang Kati", "Rutan Padang", "Lapas Pariaman"],
    "Lapas Riau": [
      "Rutan Kelas IIB Pekanbaru",
      "Lapas Kelas IIA Pekanbaru",
      "Lapas Kelas IIA Bangkinang",
      "Lapas Kelas IIA Bengkalis",
      "Lapas Kelas IIA Dumai",
      "Lapas Kelas IIA Pasir Pengaraian",
    ],
    "Lapas Bengkulu": [
      "Lapas Kelas IIA Curup",
      "Lapas Kelas IIA Bengkulu",
      "Lapas Perempuan Kelas IIA Bengkulu",
      "Lapas Kelas IIB Arga Makmur",
      "Lapas Kelas IIB Manna",
      "Rutan Kelas IIB Bengkulu",
    ],
    "Lapas Bangka Belitung": ["Rutan Kelas IIB Muntok"],
    "Lapas Lampung": [
      "Rutan Bandar Lampung",
      "Lapas Kelas IIA Kotabumi",
      "Lapas Kelas IIA Kalianda",
      "Lapas Kelas IIA Way Kanan",
      "Lapas Kelas IIA Gunung Sugih",
      "Lapas Kelas IIA Kalianda",
      "Lapas Kelas IIA Metro",
    ],
    "Lapas DKI Jakarta": [
      "Lapas Kelas I Cipinang",
      "Lapas Perempuan Kelas IIA Jakarta",
      "Lapas Narkotika Kelas IIA Jakarta",
      "Lapas Salemba",
    ],
    "Lapas Banten": [
      "Lapas Wanita Tangerang",
      "Lapas Kelas I Tangerang",
      "Lapas Kelas IIA Serang",
      "Lapas Kelas IIA Cilegon",
    ],
    "Lapas Jawa Barat": [
      "Lapas Kelas I Sukamiskin",
      "Lapas Kelas IIA Gunung Sindur",
      "Lapas Kelas IIA Banceuy",
      "Lapas Kelas IIA Karawang",
      "Lapas Kelas IIA Bekasi",
      "Lapas Kelas IIA Cirebon",
    ],
    "Lapas Jawa Tengah": [
      "Lapas Kelas IIA Magelang",
      "Lapas Kelas I Semarang",
      "Lapas Kelas IIA Ambarawa",
      "Lapas Kelas IIA Purwokerto",
      "Lapas Kelas IIA Kendal",
    ],
    "Lapas Jawa Timur": [
      "Lapas Kelas I Surabaya",
      "Lapas Kelas I Malang",
      "Lapas Kelas IIA Kediri",
      "Lapas Kelas IIA Jember",
      "Lapas Kelas IIA Banyuwangi",
      "Rutan Kelas I Medaeng",
    ],
    "Lapas D.I. Yogyakarta": [
      "Lapas Kelas IIA Yogyakarta",
      "Lapas Kelas IIA Sleman",
      "Rutan Kelas IIB Yogyakarta",
    ],
    "Lapas Bali": ["Lapas Kelas IIA Kerobokan", "Lapas Kelas IIB Singaraja", "Lapas Kelas IIB Klungkung"],
    "Lapas Nusa Tenggara Barat": [
      "Rutan Kelas IIB Sumbawa",
      "Lapas Kelas IIA Mataram",
      "Lapas Kelas IIA Bima",
      "Lapas Kelas IIB Dompu",
    ],
    "Lapas Nusa Tenggara Timur": ["Lapas Kelas IIA Kupang", "Lapas Kelas IIB Atambua", "Lapas Kelas IIB Ende"],
    "Lapas Kalimantan Tengah": ["Lapas Kelas IIA Palangka Raya", "Lapas Kelas IIA Pangkalan Bun", "Lapas Kelas IIB Kapuas"],
    "Lapas Kalimantan Timur": ["Lapas Kelas IIA Samarinda", "Lapas Kelas IIA Balikpapan", "Lapas Kelas IIB Tenggarong"],
    "Lapas Kalimantan Selatan": ["Lapas Kelas IIA Banjarmasin", "Lapas Kelas IIA Banjarbaru", "Lapas Kelas IIA Kotabaru"],
    "Lapas Kalimantan Barat": ["Lapas Kelas IIA Pontianak", "Lapas Kelas IIA Singkawang", "Lapas Kelas IIA Ketapang"],
    "Lapas Sulawesi Selatan": ["Lapas Kelas I Makassar", "Lapas Kelas IIA Parepare", "Lapas Kelas IIA Palopo"],
    "Lapas Sulawesi Utara": ["Lapas Kelas IIA Manado", "Lapas Kelas IIB Bitung", "Lapas Kelas IIB Tomohon"],
    "Lapas Sulawesi Tengah": ["Lapas Kelas IIA Palu", "Lapas Kelas IIB Poso", "Lapas Kelas IIB Luwuk"],
    "Lapas Sulawesi Tenggara": ["Lapas Kelas IIA Kendari", "Lapas Kelas IIB Baubau", "Lapas Kelas IIB Kolaka"],
    "Lapas Maluku": ["Lapas Kelas IIA Ambon", "Lapas Kelas IIB Tual", "Lapas Kelas IIB Masohi"],
  };
  
  
  

  // Menutup dropdown saat klik di luar, tetapi tetap terbuka saat klik di dalam
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (button) => {
    setActiveDropdown(activeDropdown === button ? null : button);
  };

  return (
    <div className="w-full overflow-hidden whitespace-nowrap relative">
      <div className="flex space-x-10">
        {Object.keys(cityData).map((button, i) => (
          <div key={i} className="relative" ref={dropdownRef}>
            <button
              className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition"
              onClick={() => toggleDropdown(button)}
            >
              {button}
            </button>

            {/* Dropdown */}
            {activeDropdown === button && (
              <div className="mt-2 w-auto bg-white border border-gray-300 rounded-lg shadow-md">
                {cityData[button].map((city, index) => (
                  <p
                    key={index}
                    className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                  >
                    {city}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
