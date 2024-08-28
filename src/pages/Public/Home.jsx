import React from 'react';
import College from '@/assets/farookcollege.png';
import Pattern from '@/assets/Mask.png';
import Image1 from '@/assets/image29.png';
import Image2 from '@/assets/image30.png';
import Image3 from '@/assets/image31.png';
import Arrow from '@/assets/arrow.png';

const Home = () => {
  return (
    <div>
      <div className="w-full h-[100px] bg-white flex justify-start items-center">
        <div className='w-[300px] h-[90px] flex justify-center items-center'>
          <img className='ml-[30px]' src={College} alt="College Logo" />
        </div>
      </div>
      <div className='w-full h-[350px] bg-red-800 flex justify-center'
      style={{ backgroundImage: `url(${Pattern})`}}>
        <div className='w-[900px] h-[100px] bg-white font-medium  flex justify-center items-center mt-[100px] rounded-[18px] text-[24px] text-red-800'>open science press</div>
      </div>
      <div className="w-full h-[500px] bg-[#F9FAFB] flex justify-center">
        <div className="w-[900px] h-[300px] mt-[-80px] flex justify-between">
          <div className="w-[293px] h-full bg-white flex justify-center items-center rounded-lg">
            <div className="w-[273px] h-[280px] flex-col">
              <div className="w-full h-[100px] bg-red-800 flex justify-between rounded-lg">
              <div className='h-full flex justify-end'><img src={Image1} alt="RUBY OA PUBLISHING" /></div>
                <p className='h-full w-1/2 text-right flex pr-2 items-center text-white font-bold'>RUBY OA PUBLISHING</p>
              </div>
              <div className="w-full h-[125px] bg-white pt-5 text-[12px]">Discover the future of scholarly communication with Ruby Open Access Publishing.</div>
              <div className="w-full h-[55px] bg-black rounded-lg flex">
                <p className='h-[55px] w-[218px] flex justify-center items-center text-white'>GO</p>
                <div className="h-[55px] w-[55px] flex justify-center items-center"><img src={Arrow} alt="arrow" /></div>
                </div>
            </div>
          </div>
          <div className="w-[293px] h-full bg-white flex justify-center items-center rounded-lg">
            <div className="w-[273px] h-[280px] flex-col">
              <div className="w-full h-[100px] bg-red-800 flex justify-between rounded-lg">
                <div className='h-full flex justify-end'><img src={Image2} alt="RUBY OA PUBLISHING" /></div>
                <p className='h-full w-1/2 text-right flex pr-2 items-center text-white font-bold'>KNOWLEDGE COMMON</p>
              </div>
              <div className="w-full h-[125px] bg-white pt-5 text-[12px]">Join us in revolutionising academic scholarship with accessible, efficient, and impactful institutional repositories. Let’s elevate your institution’s research presence together.</div>
              <div className="w-full h-[55px] bg-black rounded-lg flex">
                <p className='h-[55px] w-[218px] flex justify-center items-center text-white'>GO</p>
                <div className="h-[55px] w-[55px] flex justify-center items-center"><img src={Arrow} alt="arrow" /></div>
                </div>
            </div>
          </div>
          <div className="w-[293px] h-full bg-white flex justify-center items-center rounded-lg">
            <div className="w-[273px] h-[280px] flex-col">
              <div className="w-full h-[100px] bg-red-800 flex justify-between rounded-lg">
                <div className="flex justify-end h-full"><img src={Image3} alt="RUBY OA PUBLISHING" /></div>
                <p className='h-full w-1/2 text-right flex pr-2 items-center text-white font-bold'>CITIZEN SCIENCE</p>
              </div>
              <div className="w-full h-[125px] bg-white pt-5 text-[12px]">Join us in shaping the future of science communication and fostering collaboration between researchers and the public. Let’s make science accessible to all!</div>
              <div className="w-full h-[55px] bg-black rounded-lg flex">
                <p className='h-[55px] w-[218px] flex justify-center items-center text-white'>GO</p>
                <div className="h-[55px] w-[55px] flex justify-center items-center"><img src={Arrow} alt="arrow" /></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
