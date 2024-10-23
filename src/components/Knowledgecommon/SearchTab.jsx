import React from 'react'
import search_icon from '@/assets/search.svg';
import FilterIcon  from '@/assets/filterIcon.svg';
const SerachTab = ({ filter = true}) => {
  return (
    <div className="h-[60px] w-full flex justify-center">
      <div className="h-full w-[900px] bg-white rounded-xl flex justify-between items-center pl-4 mt-[-30px] border-[2px]">
        <div className="h-full w-[800px] flex justify-start items-center ">
          <img src={search_icon} className="h-5 w-5 " alt="search icon" />
          <input className='ml-2 w-[100%] h-full focus:outline-none' type="text" placeholder='search...' />
        </div>

        {filter && (
          <div className="h-[20px] w-[100px] flex ">
            <img src={FilterIcon} alt="Filter icon" />
            <p className='h-[17px] w-[35px] text-[#F36760] text-[14px] font-semibold ml-[4px]'>Filter</p>
          </div>
        )}
      </div>
    </div>
  );

}

export default SerachTab
