import { RiGlobalLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA]">
      <div className="md:flex items-center px-8 md:px-16 py-8 text-[#757575] text-xs font-normal">
        <div className="flex items-center gap-2 flex-1">
          <RiGlobalLine className="w-4 h-4" />
          <h2 className="font-medium">Indonesia</h2>
        </div>

        <p className="hidden md:flex flex-1 text-left md:text-center">
          2025 | All Right Reserved | Palapa Teknologi Komunikasi
        </p>

        <div className="flex-1 text-left md:text-right my-4 md:mt-0">
        <h2 className="text-xs whitespace-nowrap">
          Kebijakan Privasi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Waspada Penipuan
        </h2>
        </div>

        <p className="md:hidden text-left md:text-center mb-10">
          2025 | All Right Reserved | Palapa Teknologi Komunikasi
        </p>
      </div>
    </footer>
  );
}
