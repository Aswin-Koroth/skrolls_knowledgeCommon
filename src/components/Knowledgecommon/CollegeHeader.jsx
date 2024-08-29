import React from 'react'
import Pattern from '@/assets/bg.png';
const CollegeHeader = () => {
  return (
    <div className='w-full h-[200px] bg-red-800 flex justify-center'
    style={{ backgroundImage: `url(${Pattern})`,backgroundSize: 'cover'}}>
      <div className='w-[900px] h-[100px] bg-white font-bold  flex justify-center items-center mt-[50px] rounded-[18px] text-[24px] text-red-800'>Open Science Press</div>
    </div>
  )
}

export default CollegeHeader
