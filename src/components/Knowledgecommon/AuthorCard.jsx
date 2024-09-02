import React from 'react'
import RightArrow from '@/assets/arrow_forward.svg';
const AuthorCard = ({AuthorProfile,AuthorName,AuthorPosition}) => {
  return (
    <div className="h-[350px] w-[330px] bg-white rounded-[18px] flex justify-center items-center border-[2px]">
        <div className="h-[330px] w-[310px] flex-col justify-center items-center ">
            <div className="h-[257px] w-[310px] rounded-[10px] overflow-hidden"><img className = "h-full w-full object-cover" src={AuthorProfile} alt="" /></div>
            <div className="h-[60px] w-full mt-[5px] flex">
                <div className="h-full w-[250px] ">
                    <div className="h-[30px] w-full font-semibold text-[20px] ">{AuthorName} </div>
                    <div className="h-[30px] w-full text-[#CBCBCB] text-[20px]">{AuthorPosition}</div>
                </div>
                <div className="h-full w-[60px] flex justify-center items-center"><img src= {RightArrow} alt="" /></div>
                
            </div>
        </div>
    </div>
  )
}

export default AuthorCard
