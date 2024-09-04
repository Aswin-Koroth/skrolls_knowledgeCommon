import LogoHeader from '@/components/Knowledgecommon/LogoHeader';
import React from 'react'
import Pattern from '@/assets/bg.png';
import Author1 from '@/assets/author1.png';
import CitizenScience from '@/assets/citizenScienceLogo.png';
import Instagram from '@/assets/instagram.svg';
import Facebook from '@/assets/facebook.svg';
import Twitter from '@/assets/twitterx.svg'; 
import Settings from '@/assets/Settingsdot.svg'
import ArticleCard from '@/components/Knowledgecommon/ArticleCard';
const AuthorPage = () => {
  return (
    <div>
      <LogoHeader/>
      <div className='w-full h-[200px] bg-red-800 flex flex-col justify-center items-center'
        style={{ backgroundImage: `url(${Pattern})`,backgroundSize: 'cover'}}>
            <img className='h-[74px] w-[74px] rounded-[37px] ' src={Author1} alt="" />
            <p className='h-[18px] w-auto text-[14px] text-[#fff] font-semibold'>Dr. Bonnie Barstow </p>
            <p className='h-[18px] w-auto text-[14px] text-[#fff] font-normal'>@rafsal.n</p>
        </div>
        <div className="h-[145px] w-full flex justify-center items-center ">
            <div className="h-full w-[441px] flex flex-col justify-between items-end mt-[-40px]">
                <div className="h-[69px] w-full flex ">
                    <div className="h-[69px] w-[269px] bg-white rounded-[18px] flex flex-col justify-center items-start px-[10px] ">
                        <p className='text-[12px] text-[#545454] font-semibold'>Workspace (company / institute)</p>
                        <p className='text-[12px] text-[#0B0B0B] font-bold'>Farook College</p>
                    </div>
                    <div className="h-[69px] w-[165px] bg-white rounded-[18px] flex flex-col justify-center items-start ml-[5px] px-[10px]">
                        <p className='text-[12px] text-[#545454] font-semibold'>Position</p>
                        <p className='text-[12px] text-[#0B0B0B] font-bold'>Student</p>
                    </div>
                </div>
                <div className="h-[69px] w-[441px]">
                    <div className="h-[69px] w-full bg-white rounded-[18px] flex justify-center items-center">
                        <div className="h-[37px] w-[387px] flex justify-between">
                            <div className="h-[36px] w-[170px] bg-white rounded-[18px] border-[2px] flex justify-center item-center overflow-hidden">
                                <img className='h-[24] w-[69px] ' src={CitizenScience} alt="" />
                                <p className=' h-[24px] text-[12px] font-bold mt-[5px]'>Citizen Science</p>
                            </div>
                            <div className="h-[36px] w-[36px] rounded-[18px] flex justify-center items-center"><img src={Instagram} alt="" /></div>
                            <div className="h-[36px] w-[36px] rounded-[18px] flex justify-center items-center"><img src={Facebook} alt="" /></div>
                            <div className="h-[36px] w-[36px] rounded-[18px] flex justify-center items-center"><img src={Twitter} alt="" /></div>
                            <div className="h-[36px] w-[36px] rounded-[18px] flex justify-center items-center"><img src={Settings} alt="" /></div>
                        </div>
                </div>
                </div>
            </div>
        </div>
        <div className="h-[20px] w-full flex justify-center items-center"><p className='text-[#776968] text-[15px] font-semibold'>Research Activity</p></div>
        <div className="h-[600px] w-full flex justify-end">
            <div className="h-full w-[960px]">
            <div className='h-[600px] w-full flex justify-center items-start mt-[10px]'>
                <ArticleCard ArticleTitle="Innovative Strategies for Enhancing Business Growth in the Digital Age" 
                ArticleTopic="Hellenic Plant Protection Journal" Category="Journal article" 
                PublishedDate="01 Jan 2022" AuthorImage={Author1} AuthorName="A. Majeed"/>
                </div>
            </div>
            <div className="h-full w-[340px]"></div>
        </div>
    </div>
  )
}

export default AuthorPage
