import Image from 'next/image';
import React from 'react';
import AboutItem from './AboutItem';

const About = () => {
  return (
    <section className='flex w-full'>
      <div className='bg-[#1A1A1A] h-screen sticky top-0 flex px-20 items-center flex-[0.65]'>
        <p className='text-7xl font-Poppins font-semibold text-white leading-[90px]'>
          Vote <br />
          Propose <br />
          Interoperable!
        </p>
      </div>
      <div className='flex-[0.35] bg-[#6736F1] px-6 py-10 font-Poppins'>
        <AboutItem
          imgUrl='/assets/landing1.svg'
          index={1}
          title={'OnChain DAOs'}
          subtitle={
            'Set Up and Register Your DAO; Govern Across Chains Seamlessly without any hassle on our platform!'
          }
        />

        <AboutItem
          imgUrl='/assets/landing2.svg'
          index={2}
          title={'Raise Proposals'}
          subtitle={
            'Create on-chain proposals for decentralized decision-making. Vote efficiently on Polygon zkEVM for swift, scalable consensus.'
          }
        />

        <AboutItem
          imgUrl='/assets/landing3.svg'
          index={3}
          title={'Voting with ZkProofs'}
          subtitle={
            "Enable cross-chain voting, integrating token holdings from zkEVM, Polygon, and Ethereum. Ensure every vote counts, reflecting assets across networks for true representation."
          }
        />
      </div>
    </section>
  );
};

export default About;
