import React from 'react';
import VotingProgressBar from '../ProgressBar/ProgressBar';

const ProposalVotes = () => {
  return (
    <div className='flex-[0.3] bg-[#181818] font-Avenir rounded-md overflow-hidden h-fit'>
      <p className='bg-[#232323] text-center py-4'>Current Votes</p>
      <div className='px-3 py-5'>
        <VotingProgressBar
          yesVotes={70}
          noVotes={30}
        />

        <div className='flex gap-3 mt-4 items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='bg-green-700 h-4 w-4 rounded-sm ' />
            <p>YES</p>
          </div>

          <p>403K</p>
        </div>

        <div className='flex gap-3 mt-4 items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='bg-red-700 h-4 w-4 rounded-sm' />
            <p>NO</p>
          </div>

          <p>403K</p>
        </div>
      </div>
    </div>
  );
};

export default ProposalVotes;
