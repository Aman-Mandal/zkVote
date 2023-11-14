import React from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

const Navbar = () => {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();

  return (
    <nav className='w-full py-3 justify-end flex px-10 text-white fixed font-Avenir items-center bg-[#111111] border-b border-[#2E2E2E] z-10'>
      <button
        onClick={() => open()}
        className='bg-[#292929] hover:bg-[#333333] text-sm py-2 px-6 rounded-md'>
        {isConnected
          ? `${address.slice(0, 6)}....${address.slice(-4)}`
          : 'Connect'}
      </button>
    </nav>
  );
};

export default Navbar;
