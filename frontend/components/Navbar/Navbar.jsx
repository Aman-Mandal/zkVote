import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-full py-3 justify-end flex px-10 text-white fixed font-Poppins items-center bg-[#111111] border-b border-[#1b1b1b] z-10'>
      <button className='bg-[#151515] text-sm py-2 px-6 rounded-md'>
        Connect
      </button>
    </nav>
  );
};

export default Navbar;
