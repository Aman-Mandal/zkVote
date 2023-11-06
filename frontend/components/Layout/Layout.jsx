import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className='ml-[70px] pt-[60px]'>{children}</div>
    </div>
  );
};

export default Layout;
