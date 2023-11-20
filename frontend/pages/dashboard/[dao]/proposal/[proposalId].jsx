import ProposalDescription from '@/components/Proposal/ProposalDescription';
import ProposalTitleCard from '@/components/Proposal/ProposalTitleCard';
import { useRouter } from 'next/router';
import React from 'react';

const Proposal = () => {
  return (
    <div className='bg-[#111111] min-h-screen font-Avenir text-white p-10 pt-20 shadow-md shadow-[#3a3a3a]'>
      <ProposalTitleCard
        title={'Empowering Early Contributors: The community Arbiter Proposal'}
      />

      <div className='flex mt-10'>
        <ProposalDescription />
      </div>
    </div>
  );
};

export default Proposal;
