import React from 'react'
import search_icon from '@/assets/search.svg';
const SerachTab = () => {
  return (
    <div className="h-[60px] w-full flex justify-center">
    <div className="h-full w-[900px] bg-white rounded-xl flex items-center pl-4 mt-[-30px]">
    <img src={search_icon} className="h-5 w-5" alt="search icon" />
    <input className='ml-2' type="text" placeholder='search...'/>
    </div>
    </div>
  )
}

export default SerachTab
