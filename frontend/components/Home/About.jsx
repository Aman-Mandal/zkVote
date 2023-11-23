import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const About = () => {
  const router = useRouter();
  return (
    <section className='min-h-screen bg-[#090909] border-t-[0.5px] border-gray-700 rounded-[100px] '>
      <div className='flex w-[80%] mx-auto mt-20 gap-10'>
        <div className='flex-[0.5]'>
          <div className='h-[550px] rounded-3xl bg-[#6736F1] p-10 mb-10 relative overflow-hidden'>
            <p className='text-3xl text-white font-Poppins font-semibold mb-4'>
              Manage Onchain DAOs
            </p>
            <p className='text-gray-300 font-Poppins text-thin'>
              Set Up and Register Your DAO; Govern Across Chains Seamlessly
              without any hassle on our platform!
            </p>

            <Image
              src='/about7.svg'
              height={300}
              width={300}
              alt='Create contract'
              className=' mt-3'
            />
          </div>
          <div className='bg-[#121212] h-[300px] rounded-3xl p-10 mb-10  border-[0.5px] border-gray-600'>
            <Image
              src='/about3.svg'
              alt='image'
              height={40}
              width={60}
              className='mb-6'
            />

            <p className='font-semibold font-Poppins text-2xl  text-white'>
              More faster with Phalla & Chainlink
            </p>
            <p className='font-thin mb-8 text-gray-300'>
              We offer quick computation and seamless crosschain experience with
              the help of Phalla Network, Chainlink Automation & LXLY ZkEVM
              Bridge.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className='flex-[0.5]'>
          <div className='bg-[#121212] h-[300px] rounded-3xl p-10 mb-10  border-[0.5px] border-gray-600'>
            <Image
              src='/about1.svg'
              alt='image'
              height={40}
              width={60}
              className='mb-10'
            />

            <p className='font-semibold font-Poppins text-2xl mb-1 text-white'>
              Manage crosschain governance
            </p>
            <p className='font-thin mb-8 text-gray-300'>
              Having governance token on different chains? Run your governance
              crosschain via our dapp with <strong>ZkProofs</strong> built on
              ZkEVM and LXLY Bridge!
            </p>
          </div>
          <div className='h-[550px] rounded-3xl bg-[#6736F1] text-white p-10 relative'>
            <Image
              src='/about4.svg'
              height={250}
              width={250}
              alt='Create contract'
              className='mt-0 mx-auto mb-10'
            />

            <div className='self-end'>
              <p className='text-3xl text-white font-Poppins font-semibold mb-4'>
                Create Proposals
              </p>
              <p className='text-gray-300 font-Poppins text-thin'>
                Create on-chain proposals for decentralized decision-making.
                Vote efficiently on Polygon zkEVM for swift, scalable consensus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[80%] mx-auto'>
        <div className='bg-[#121212] h-[300px] rounded-3xl p-10 mb-10  border-[0.5px] border-gray-600 flex flex-col items-center'>
          <Image
            src='/about1.svg'
            alt='image'
            height={40}
            width={60}
            className='mb-10'
          />

          <p className='font-semibold font-Poppins text-2xl mb-1 text-white'>
            Managing Crosschain Voting Power
          </p>
          <p className='font-thin mb-8 w-[550px] text-center text-gray-300'>
            Having governance token on Ethereum, Polygon (POS) & ZkEVM? Well
            guess what? We calculate all your crosschain governance tokens and
            manage your total voting power!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
