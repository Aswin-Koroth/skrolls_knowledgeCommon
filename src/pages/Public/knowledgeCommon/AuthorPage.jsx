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
import Vector from '@/assets/Vector.svg';
import MetricsScore from '@/components/Knowledgecommon/MetricsScore';
import SocialMediaIcons from '@/components/Knowledgecommon/SocialMediaIcons';
import { useNavigate } from 'react-router-dom';
const AuthorPage = () => {
    const navigate = useNavigate();
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
                            <SocialMediaIcons Images={Instagram} />
                            <SocialMediaIcons Images={Facebook} />
                            <SocialMediaIcons Images={Twitter} />
                            <SocialMediaIcons Images={Settings} />
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
                PublishedDate="01 Jan 2022" AuthorImage={Author1} AuthorName="A. Majeed" onClick={() => navigate('/public/article')} />
                </div>
            </div>
            <div className="h-full w-[340px] ">
                <div className="w-[323px] h-[375px] bg-white rounded-[27px] ml-[10px] flex flex-col justify-between items-center">
                    <div className="h-[20px] w-full mt-[20px] flex justify-center items-center ">
                        <div className="h-full w-[270px] flex justify-between">
                            <p className='text-[12px] text-[#000] font-semibold '>Royalty Score</p>
                            <img src={Vector} alt="" />
                        </div>
                    </div>
                    <div className="h-[100px] w-full  flex flex-col">
                        <div className="h-[75px] w-full flex justify-center items-center   relative before:content-[''] before:absolute before:h-[71px] before:w-full before:border-l-[4px] before:border-red-500 ">
                            <p className='h-full w-full text-[64px] font-bold flex justify-center items-center '>384</p>
                        </div>
                        <p className='h-[20px] w-full  flex justify-center items-center'>Score</p>
                    </div>
                    <div className="h-[120px] w-full flex flex-col justify-center items-center mb-[20px]">
                        <MetricsScore Title="Citation" Score="22" />
                        <MetricsScore Title="Peer Reviews" Score="12" />
                        <MetricsScore Title="Citizen Score" Score="07" />
                        <MetricsScore Title="Download" Score="22" />
                        <MetricsScore Title="Alt metrics" Score="13" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthorPage
