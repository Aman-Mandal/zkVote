import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const Navbar = () => {
  const { open } = useWeb3Modal();

  return (
    <nav className="w-full py-3 justify-end flex px-10 text-white fixed font-Poppins items-center bg-[#111111] border-b border-[#2E2E2E] z-10">
      <button
        onClick={() => open()}
        className="bg-[#292929] hover:bg-[#333333] text-sm py-2 px-6 rounded-md"
      >
        Connect
      </button>
    </nav>
  );
};

export default Navbar;
