import DAO from '@/components/DAO/DAO';
import PageTitle from '@/components/PageTitle/PageTitle';
import SearchBar from '@/components/SearchBar/SearchBar';
import { SERVER_URL } from '@/constants';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import React from 'react';

const Dashboard = () => {
  const [daos, setDaos] = useState([]);
  const router = useRouter();

  const getDaos = async () => {
    const response = await fetch(`${SERVER_URL}/daos`);

    const data = await response.json();

    console.log('data is', data);
    setDaos(data.data);
  };

  useEffect(() => {
    getDaos();
  }, []);

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
            Add DAO +
          </button>
        </div>

        <div className='flex flex-wrap gap-8 overflow-y-scroll'>
          {daos.length > 0 &&
            daos.reverse().map((dao) => (
              <DAO
                key={dao._id}
                id={dao._id}
                name={dao.name}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
