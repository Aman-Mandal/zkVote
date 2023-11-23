import { useRouter } from 'next/router';
import React from 'react';
// import { MetaMaskAvatar } from 'react-metamask-avatar';

const ProposalCard = ({ id, address, status, title, description }) => {
  const router = useRouter();

  const { dao } = router.query;

  return (
    <div
      onClick={() => {
        router.push(`/dashboard/${dao}/proposal/${id}`);
      }}
      className='w-full p-6 rounded-xl bg-[#181818] font-Avenir cursor-pointer hover:bg-[#222222]'>
      <div className='flex justify-between items-center '>
        <div className='flex gap-3 justify-center mb-4'>
          {/* <MetaMaskAvatar address={address} /> */}
          <p className=' text-red-200'>
            {address.slice(0, 6)}...{address.slice(-5)}
          </p>
        </div>

        <p className='bg-green-300 rounded-full px-6 py-1 text-green-800 font-semibold'>
          {status}
        </p>
      </div>
      <div>
        <p className='text-2xl font-semibold text-[#f2f2f2] mb-2'>{title}</p>
        <p className='text-[#828282] w-[90%]'>
          {description ? description.slice(0, 400) + '...' : ''}
        </p>
      </div>

      <p className='mt-4  '>Ends in 2 days</p>
    </div>
  );
};

export default ProposalCard;
