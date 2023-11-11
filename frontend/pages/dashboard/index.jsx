import DAO from '@/components/DAO/DAO';
import PageTitle from '@/components/PageTitle/PageTitle';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useRouter } from 'next/router';
import React from 'react';

const Dashboard = () => {
  const dummyDAOs = [
    {
      id: '1',
      name: 'StationX',
      logo: '/assets/pic.svg',
      tagline: 'Hello world',
      walletAddress: '0x51EEBc7765b246a4D16d02b28CEAC61299AB7d9d',
      amountRaised: 50,
      categories: ['AI', 'social'],
    },
    {
      id: '2',
      name: 'StationX',
      logo: '/assets/pic.svg',
      tagline: 'Hello world',
      walletAddress: '0x51EEBc7765b246a4D16d02b28CEAC61299AB7d9d',
      amountRaised: 50,
      categories: ['AI', 'social'],
    },
    {
      id: '3',
      name: 'StationX',
      logo: '/assets/pic.svg',
      tagline: 'Hello world',
      walletAddress: '0x51EEBc7765b246a4D16d02b28CEAC61299AB7d9d',
      amountRaised: 50,
      categories: ['AI', 'social'],
    },
    {
      id: '4',
      name: 'StationX',
      logo: '/assets/pic.svg',
      tagline: 'Hello world',
      walletAddress: '0x51EEBc7765b246a4D16d02b28CEAC61299AB7d9d',
      amountRaised: 50,
      categories: ['AI', 'social'],
    },
  ];

  const router = useRouter();

  return (
    <div className='bg-[#111111] h-[100vh] font-Avenir text-white p-10 pt-20 box-border '>
      <div className='w-[95%] mx-auto h-full overflow-y-scroll'>
        <PageTitle
          title={'DAOs'}
          subtext='List of all the listed onChain DAOs on this crazy platform.'
        />

        <div className='flex justify-between items-center'>
          <SearchBar />
          <button
            onClick={() => {
              router.push('/create/dao');
            }}
            className='bg-[#f2f2f2] py-3 px-6 text-black font-semibold rounded-md hover:bg-white'>
            Create DAO +
          </button>
        </div>

        <div className='flex flex-wrap gap-8 overflow-y-scroll'>
          {dummyDAOs.map((dao) => (
            <DAO
              key={dao.id}
              logo={dao.logo}
              name={dao.name}
              members={'406K'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
