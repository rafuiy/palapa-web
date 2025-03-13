"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";


export default function MarqueeButton() {
  const [isRunning, setIsRunning] = useState(true);
  const containerRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 }); // Simpan ID button yang sedang dibuka


  const toggleMarquee = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = isRunning ? "paused" : "running";
      setIsRunning(!isRunning);
    }
  };

  // List button yang akan digandakan
  const buttons = [
    { id: 1, text: "Lapas Aceh", city: ["LPKA Banda Aceh", "Lapas Kelas IIA Lhokseumawe", "Lapas Banda Aceh"] },
    { id: 2, text: "Lapas Sumatra Utara", city: [
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
      ] },
    { id: 3, text: "Lapas Sumatra Barat", city: ["Lapas Kelas IIA Taluang Kati", "Rutan Padang", "Lapas Pariaman"] },
    { id: 4, text: "Lapas Riau", city: [
        "Rutan Kelas IIB Pekanbaru",
        "Lapas Kelas IIA Pekanbaru",
        "Lapas Kelas IIA Bangkinang",
        "Lapas Kelas IIA Bengkalis",
        "Lapas Kelas IIA Dumai",
        "Lapas Kelas IIA Pasir Pengaraian",
      ] },
    { id: 5, text: "Lapas Bengkulu", city: [
        "Lapas Kelas IIA Curup",
        "Lapas Kelas IIA Bengkulu",
        "Lapas Perempuan Kelas IIA Bengkulu",
        "Lapas Kelas IIB Arga Makmur",
        "Lapas Kelas IIB Manna",
        "Rutan Kelas IIB Bengkulu",
      ] },
    { id: 6, text: "Lapas Bangka Belitung", city: ["Rutan Kelas IIB Muntok"] },
    { id: 7, text: "Lapas Lampung", city: [
        "Rutan Bandar Lampung",
        "Lapas Kelas IIA Kotabumi",
        "Lapas Kelas IIA Kalianda",
        "Lapas Kelas IIA Way Kanan",
        "Lapas Kelas IIA Gunung Sugih",
        "Lapas Kelas IIA Kalianda",
        "Lapas Kelas IIA Metro",
      ] },
    { id: 8, text: "Lapas DKI Jakarta", city: [
        "Lapas Kelas I Cipinang",
        "Lapas Perempuan Kelas IIA Jakarta",
        "Lapas Narkotika Kelas IIA Jakarta",
        "Lapas Salemba",
      ] },
    { id: 9, text: "Lapas Banten", city: [
        "Lapas Wanita Tangerang",
        "Lapas Kelas I Tangerang",
        "Lapas Kelas IIA Serang",
        "Lapas Kelas IIA Cilegon",
      ] },
    { id: 10, text: "Lapas Jawa Barat", city: [
        "Lapas Kelas I Sukamiskin",
        "Lapas Kelas IIA Gunung Sindur",
        "Lapas Kelas IIA Banceuy",
        "Lapas Kelas IIA Karawang",
        "Lapas Kelas IIA Bekasi",
        "Lapas Kelas IIA Cirebon",
      ] },
    { id: 11, text: "Lapas Jawa Tengah", city: [
        "Lapas Kelas IIA Magelang",
        "Lapas Kelas I Semarang",
        "Lapas Kelas IIA Ambarawa",
        "Lapas Kelas IIA Purwokerto",
        "Lapas Kelas IIA Kendal",
      ] },
    { id: 12, text: "Lapas Jawa Timur", city: [
        "Lapas Kelas I Surabaya",
        "Lapas Kelas I Malang",
        "Lapas Kelas IIA Kediri",
        "Lapas Kelas IIA Jember",
        "Lapas Kelas IIA Banyuwangi",
        "Rutan Kelas I Medaeng",
      ] },
    { id: 13, text: "Lapas D.I. Yogyakarta", city: [
        "Lapas Kelas IIA Yogyakarta",
        "Lapas Kelas IIA Sleman",
        "Rutan Kelas IIB Yogyakarta",
      ] },
    { id: 14, text: "Lapas Bali", city: ["Lapas Kelas IIA Kerobokan", "Lapas Kelas IIB Singaraja", "Lapas Kelas IIB Klungkung"] },
    { id: 15, text: "Lapas Nusa Tenggara Barat", city: [
        "Rutan Kelas IIB Sumbawa",
        "Lapas Kelas IIA Mataram",
        "Lapas Kelas IIA Bima",
        "Lapas Kelas IIB Dompu",
      ] },
      { id: 16, text: "Lapas Nusa Tenggara Timur", city: ["Lapas Kelas IIA Kupang", "Lapas Kelas IIB Atambua", "Lapas Kelas IIB Ende"] },
      { id: 17, text: "Lapas Kalimantan Tengah", city: ["Lapas Kelas IIA Palangka Raya", "Lapas Kelas IIA Pangkalan Bun", "Lapas Kelas IIB Kapuas"] },
      { id: 18, text: "Lapas Kalimantan Timur", city: ["Lapas Kelas IIA Samarinda", "Lapas Kelas IIA Balikpapan", "Lapas Kelas IIB Tenggarong"] },
      { id: 19, text: "Lapas Kalimantan Selatan", city: ["Lapas Kelas IIA Banjarmasin", "Lapas Kelas IIA Banjarbaru", "Lapas Kelas IIA Kotabaru"] },
      { id: 20, text: "Lapas Kalimantan Barat", city: ["Lapas Kelas IIA Pontianak", "Lapas Kelas IIA Singkawang", "Lapas Kelas IIA Ketapang"] },
      { id: 21, text: "Lapas Sulawesi Selatan", city: ["Lapas Kelas I Makassar", "Lapas Kelas IIA Parepare", "Lapas Kelas IIA Palopo"] },
      { id: 22, text: "Lapas Sulawesi Utara", city: ["Lapas Kelas IIA Manado", "Lapas Kelas IIB Bitung", "Lapas Kelas IIB Tomohon"] },
      { id: 23, text: "Lapas Sulawesi Tengah", city: ["Lapas Kelas IIA Palu", "Lapas Kelas IIB Poso", "Lapas Kelas IIB Luwuk"] },
      { id: 24, text: "Lapas Sulawesi Tenggara", city: ["Lapas Kelas IIA Kendari", "Lapas Kelas IIB Baubau", "Lapas Kelas IIB Kolaka"] },
      { id: 25, text: "Lapas Maluku", city: ["Lapas Kelas IIA Ambon", "Lapas Kelas IIB Tual", "Lapas Kelas IIB Masohi"] },

  ];

  // Gandakan daftar button untuk memastikan transisi tidak ada celah
  const loopedButtons = [...buttons, ...buttons];

  const showDropdown = (buttonId, event) => {
    const rect = event.target.getBoundingClientRect();
    setDropdownPosition({ top: rect.bottom + window.scrollY, left: rect.left });
    setOpenDropdown(buttonId);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-menu")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="w-full bg-gray-100 py-4 overflow-hidden relative md:hidden">
      <div
        ref={containerRef}
        className="flex space-x-4 w-max whitespace-nowrap animate-marquee"
        style={{ animationPlayState: isRunning ? "running" : "paused" }}
        onMouseEnter={toggleMarquee}
        onMouseLeave={toggleMarquee}
      >
        {loopedButtons.map((button, index) => (
          <div key={index} className="relative">
          {/* Button */}
          <button
            className={`px-7 md:px-9 xl:px-14 py-1 md:py-1 text-white text-[10px] md:text-sm lg:text-md xl:text-lg rounded-lg shadow-md w-full ${button.color} bg-blue-500 hover:bg-blue-600`}
            onMouseEnter={(e) => showDropdown(button.id, e)}
            onMouseLeave={() => setOpenDropdown(null)} 
          >
            {button.text}
          </button>
        </div>
        ))}
      </div>

       {/* Dropdown */}
       {openDropdown !== null &&
        createPortal(
            <div className="dropdown-menu absolute bg-[#F4F7F9] mt-5 w-auto shadow-lg rounded-md p-5 pt-0"
            style={{ top: dropdownPosition.top, left: dropdownPosition.left }}>
              <h3 className="inline-block font-bold py-1 mt-1 rounded-xl bg-[#5091EC] px-5 text-white text-[10px] md:text-sm">
              {buttons.find((b) => b.id === openDropdown)?.text}
            </h3>
            <div className="flex flex-col text-[#4B5563] text-[10px] md:text-sm pl-5 mt-4">
              {buttons
                .find((b) => b.id === openDropdown)
                ?.city.map((cityName, index) => (
                  <p key={index} className="mb-1">
                      {index + 1}. {cityName.toUpperCase()}
                  </p>
                ))}
            </div>
            </div>,
            document.body
          )}
    </div>
  );
}
