import React, { useState } from 'react';
import DropdownButton from '@/components/Table/ui/DropDownButton';
import downarrow_icon from '@/assets/downarrow.svg';
import download from '@/assets/download.svg';
import DatePicker from '@/components/Librarian/DatePicker'

const TableToolBarLibR = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
      };
  return (
    
    <div className="h-[30px] w-full flex justify-between ">
    <div className="h-[30px] w-800px flex gap-[28px]"><DatePicker dateTitle='From'/>
    <DatePicker dateTitle='To'/>
  <div className="h-full w-[400px] flex items-center">  <p className='flex justify-center items-center font-semibold px-[3px]'>Columns</p>
    <DropdownButton
      onClick={() => toggleDropdown('filter')}
      dropdownId="filterDropdown"
      isActive={activeDropdown === 'filter'}
    >
      select
      <img
        src={downarrow_icon}
        alt="down arrow"
        className="-mr-1 ml-1.5 w-7"
      />
    </DropdownButton></div></div>
    <div className="h-[40px] w-[120px] bg-[#F36760] hover:bg-[#d75a54] cursor-pointer flex justify-around items-center px-2"><img className='h-[17px] w-[17px]' src={download} alt="" /><p className='text-white text-[14px] font-semibold'>Download</p></div>
  </div>
  )
}

export default TableToolBarLibR
