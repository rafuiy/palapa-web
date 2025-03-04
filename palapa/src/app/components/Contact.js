import { FaMapMarkerAlt, FaPhoneAlt  } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";

export default function ContactSection() {
  return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-lg mt-2 md:mt-6 mb-2 md:mb-6 overflow-hidden">
        {/* Bagian Kiri: Informasi Kontak */}
        <div className="p-6">
          <h2 className="text-xl xl:text-2xl text-center md:text-left font-bold text-gray-900">Hubungi Kami</h2>
          <p className="text-gray-600 text-sm xl:text-sm mt-2 hidden md:block">Silahkan hubungi kami untuk informasi lebih lanjut</p>

          <div className="mt-6 space-y-4 text-xs xl:text-sm">
            {/* Alamat */}
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-gray-900 w-10 md:w-7 lg:w-5 h-10 md:h-7 lg:h-5" />
              <p className="text-gray-700">
                <strong>Graha Pasopati Nusantara, Jl. Gempol Raya Kav. II No. 19 Ceger, Cipayung - Jakarta Timur 13820</strong>.
              </p>
            </div>

            {/* Telepon */}
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-gray-900 w-4 h-4" />
              <div>
                <p className="text-gray-700"><strong>Telepon</strong></p>
                <p className="text-gray-700 mt-1">0821-3865-3070</p>
              </div>  
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 text-xs md:text-[10px] xl:text-sm gap-0 md:gap-5 lg:gap-14">
              <div className="flex items-start space-x-3">
                <IoLogoWhatsapp className="text-gray-900 w-5 h-5" />
                <div className="flex flex-col gap-1">
                  <p className="text-gray-700"><strong>Nomor WhatsApp</strong></p>
                  <p className="text-gray-700">0812-1234-8615</p>
                  <a href="https://wa.me/081212348615" target="_blank" rel="noopener noreferrer" className="md:hidden bg-blue-500 text-white px-4 py-1 rounded-lg text-xs font-semibold shadow-md hover:bg-green-600">
              Chat Via Whatsapp
            </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <MdMarkEmailUnread className="text-gray-900 w-5 h-5" />
                <div className="flex flex-col gap-1">
                  <p className="text-gray-700"><strong>Email Us</strong></p>
                  <p className="text-gray-700">palapateknologi@gmail.com</p>
                  <a href="mailto:palapateknologi@gmail.com" className="bg-blue-500 text-white px-4 py-1 w-3/4 md:hidden rounded-lg text-xs font-semibold shadow-md hover:bg-blue-600">
              Chat Via Email
            </a>
                </div> 
              </div>
            </div>  
          </div>

          {/* Tombol CTA */}
          <div className="mt-3 flex space-x-10 lg:space-x-14 xl:space-x-20 hidden md:flex">
            <a href="https://wa.me/081212348615" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-lg text-[10px] font-semibold shadow-md hover:bg-green-600">
              Chat Via Whatsapp
            </a>
            <a href="mailto:palapateknologi@gmail.com" className="bg-blue-500 text-white px-4 py-2 rounded-lg text-[10px] font-semibold shadow-md hover:bg-blue-600">
              Chat Via Email
            </a>
          </div>
        </div>
        {/* Bagian Kanan: Google Maps */}
        <div className="relative">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6196948688334!2d106.89035037418397!3d-6.31358696178271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edfe6ea481f9%3A0xd2ded6731b79fb6!2sGRAHA%20PASOPATI%20NUSANTARA!5e0!3m2!1sid!2sid!4v1741107375046!5m2!1sid!2sid"
        loading="lazy" 
        className="w-full h-full rounded-r-2xl">
        </iframe>

          

          {/* Tombol lihat di Google Maps */}
          <a
            href="https://www.google.com/maps?q=Graha+Pasopati+Nusantara"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/3 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg text-xs font-semibold shadow-md flex items-start justify-left space-x-2 hover:bg-gray-200"
          >
            <FaMapMarkerAlt className="text-gray-600" />
            <span>Lihat dari Google Maps</span>
          </a>
        </div>
      </div>
  );
}
