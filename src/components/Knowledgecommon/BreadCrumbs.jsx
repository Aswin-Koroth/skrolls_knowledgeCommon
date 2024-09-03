import React from 'react'
import FarookFav from '@/assets/farookFav.png';
import DeptFav from '@/assets/deptFav.png'
const BreadCrumbs = () => {
  return (
    <div className='h-[36px] w-full flex justify-center items-center mt-[10px]'>
      <div className="h-[36px] px-[5px] rounded-[18px] bg-white flex justify-center items-center">
        <div className="h-[20px] flex justify-start items-center "><img className = 'h-[20px] w-[20px] mr-[2px] ' src={FarookFav} alt="farook fav" /><p className='text-[12px]'>Farook college</p></div>
        <div className="h-[20px] w-[20px] flex justify-center items-center">/</div>
        <div className="h-[20px] flex justify-start items-center"><img className = 'h-[11px] w-[13px] mr-[2px] ' src={DeptFav} alt="farook fav" /><p className='text-[12px]'>Department of Information and Communication</p></div>
      </div>
    </div>
  )
}

export default BreadCrumbs
