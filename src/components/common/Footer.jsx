import { AiOutlineCopyright } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {

  return (
    <footer className="w-full bg-[#F5F5F3] px-10 text-black">
      <div className="w-full bg-[#F5F5F3] py-6">
        <p className="text-center text-sm flex items-center justify-center">
          <AiOutlineCopyright className="mr-1" /> Copyright 2025 |
          Shopping Website | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
