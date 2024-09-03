import React from 'react'
import Pattern from '@/assets/bg.png';
const ArticleTitle = () => {
  return (
    <div>
    <div className="h-[290px] w-full flex justify-center items-center mt-[30px]">
      <div className='w-[1050px] h-[280px] bg-red-800 flex justify-center items-end rounded-[33px] '
        style={{ backgroundImage: `url(${Pattern})`,backgroundSize: 'cover'}}>
            <div className="h-[65px] w-[1015px] bg-white mb-[15px] rounded-[18px] flex justify-center items-center"><p className='font-semibold text-[24px]'>Innovative Strategies for Enhancing Business Growth in the Digital Age</p></div>
        </div>
      </div>
    </div>
  )
}

export default ArticleTitle
