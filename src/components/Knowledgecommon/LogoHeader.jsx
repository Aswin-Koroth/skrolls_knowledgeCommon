import React from 'react'
import College from '@/assets/farookcollege.png';
const LogoHeader = () => {
  return (
    <div className="w-full h-[100px] bg-white flex justify-start items-center">
        <div className='w-[300px] h-[90px] flex justify-center items-center'>
          <img className='ml-[30px]' src={College} alt="College Logo" />
        </div>
    </div>

  )
}

export default LogoHeader
