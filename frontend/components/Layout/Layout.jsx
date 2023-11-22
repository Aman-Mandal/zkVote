import { useRouter } from 'next/router';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      {router.pathname !== '/' ? (
        <>
          <Sidebar />
          <Navbar />
        </>
      ) : (
        <></>
      )}

      <div className={router.pathname !== '/' ? `ml-[70px]` : ''}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
