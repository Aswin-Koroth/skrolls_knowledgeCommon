import React from 'react';
import DeptIcon from '@/assets/deptIcon.png';
import ArrowRight from '@/assets/ArrowRight.svg';

const CollegeCard = ({ HeroImg, Title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[340px] h-[340px] bg-white rounded-[20px] relative cursor-pointer before:content-[''] before:absolute before:h-[286px] before:w-full before:border-l-[4px] before:border-red-500 flex justify-center items-center"
    >
      <div
        className="w-[320px] h-[320px] bg-violet-950 rounded-[15px] flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover' }}
      >
        <div className="h-[240px] w-full flex justify-end items-start">
          <img
            className="h-[36px] w-[36px] border-[1px] border-white p-[8px] mt-3 mr-3 rounded-lg"
            src={DeptIcon}
            alt="department icon"
          />
        </div>
        <div className="h-[70px] w-[300px] bg-white rounded-[20px] mb-[10px] flex items-center">
          <p className="text-black text-[16px] font-bold mt-[10px] mb-[10px] ml-[14px] w-[260px]">{Title}</p>
          <div className="h-[32px] w-[32px] bg-[#D9D9D9] flex items-center justify-center mr-[16px] rounded-[16px]">
            <img src={ArrowRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
