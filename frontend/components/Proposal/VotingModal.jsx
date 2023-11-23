import Image from "next/image";
import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { useAccount } from "wagmi";
import Backdrop from "../Layout/Backdrop";
import { ethers } from "ethers";
import { VoteOnZkEvmABI, voteOnZkEvmAddress } from "@/constants";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VotingModal = ({ onClose, proposalId, proposalName }) => {
  const { address, isConnected } = useAccount();

  const [voteYes, setVoteYes] = useState(false);
  const [voteNo, setVoteNo] = useState(false);

  const submitVoteHandler = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x5a2' }],
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

    const contract = new ethers.Contract(
      voteOnZkEvmAddress,
      VoteOnZkEvmABI,
      signer
    );

      console.log({ contract });
      if (voteYes === true && voteNo === false) {
        await contract.vote(0, true, proposalId, 0);
      } else if (voteYes === false && voteNo === true) {
        await contract.vote(0, true, proposalId, 1);
      }
      toast.success('Successfully Voted!');
    } catch (error) {
      console.log(error);
      toast.error('Voting Failed');
    }
  };

  return (
    <>
      <Backdrop onClose={onClose} />
      <div className=' font-Avenir fixed  w-[600px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#181818] shadow-md rounded-md overflow-hidden z-30'>
        <p className='text-center py-3 font-semibold text-lg bg-[#232323]'>
          Voting
        </p>

        <div className='p-5  '>
          <div className='flex items-center gap-3 mb-6'>
            <Image
              src={'/assets/pic.png'}
              height={40}
              width={40}
              alt='PIC'
              className='rounded-full'
            />

            <p className='font-semibold  text-gray-300'>
              {isConnected
                ? `${address.slice(0, 6)}....${address.slice(-4)}`
                : ''}
            </p>
          </div>

          <div>
            <p className='text-2xl font-semibold'>{proposalName}</p>
            <div className='mt-3 flex gap-5'>
              <p className='font-semibold text-[#797979]'>
                Proposal Id: {proposalId}
              </p>

              <div className='flex text-[#878787] font-semibold items-center gap-1'>
                <p>Ethereum</p>
                <FaEthereum size={18} />
              </div>
            </div>
          </div>

          <div className='border-[0.5px] border-[#2E2E2E]  rounded-md mt-6'>
            <p className='py-4 border-b-[0.5px] border-[#2E2E2E] text-center text-lg font-semibold'>
              Vote
            </p>

            <div className='flex flex-col gap-3 py-3'>
              <p
                onClick={() => {
                  setVoteYes(true);
                  setVoteNo(false);
                }}
                className={`${
                  voteYes
                    ? 'bg-green-700/70 text-green-400 hover:bg-green-700/70'
                    : 'bg-[#171717]'
                } py-4 text-center mx-2 rounded-full border-[0.5px] cursor-pointer bg-[#171717]  border-[#2E2E2E] hover:bg-[#1d1d1d] `}>
                YES
              </p>
              <p
                onClick={() => {
                  setVoteYes(false);
                  setVoteNo(true);
                }}
                className={`${
                  voteNo
                    ? 'bg-red-700/70 text-red-400 hover:bg-red-700/70'
                    : 'bg-[#171717]'
                } py-4 text-center mx-2 rounded-full border-[0.5px] cursor-pointer   border-[#2E2E2E] hover:bg-[#1d1d1d] `}>
                NO
              </p>
            </div>
          </div>

          <button
            onClick={submitVoteHandler}
            className='text-center w-full mt-5 py-3 font-semibold bg-slate-100 text-black font-Avenir rounded-md'>
            Submit
          </button>
        </div>
      </div>
      <ToastContainer theme='dark' />
    </>
  );
};

export default VotingModal;
