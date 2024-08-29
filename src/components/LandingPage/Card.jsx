import React from 'react'
import Arrow from '@/assets/rightArrow.png';
const Card = ({image, title, paragraph}) => {
  return (
    <div className="w-[293px] h-full bg-white flex justify-center items-center rounded-lg">
    <div className="w-[273px] h-[280px] flex-col">
      <div className="w-full h-[100px] bg-red-800 flex justify-between rounded-lg">
      <div className='h-full flex justify-end'><img src={image} alt="RUBY OA PUBLISHING" /></div>
        <p className='h-full w-1/2 text-right flex pr-2 items-center text-white font-bold'>{title}</p>
      </div>
      <div className="w-full h-[125px] bg-white pt-5 text-[12px]">{paragraph}</div>
      <div className="w-full h-[55px] bg-black hover:bg-gray-800 cursor-pointer rounded-lg flex">
        <p className='h-[55px] w-[218px] flex justify-center items-center text-white'>GO</p>
        <div className="h-[55px] w-[55px] flex justify-center items-center"><img src={Arrow} alt="arrow" /></div>
        </div>
    </div>
    </div>

  )
}

export default Card
