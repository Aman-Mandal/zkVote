import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <div className='flex items-center gap-4 bg-[#181818] w-fit rounded-lg p-3 text-[#707070]'>
      <input
        placeholder='Search..'
        className='w-[600px] bg-inherit text-lg border-none outline-none  placeholder:text-gray-500'
      />
      <BiSearch size={25} />
    </div>
  );
};

export default SearchBar;
