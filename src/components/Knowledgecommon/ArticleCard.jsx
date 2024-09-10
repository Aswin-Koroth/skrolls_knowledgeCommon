import React from 'react'
import Author2 from '@/assets/author2.png';
import Author3 from '@/assets/author3.png';
import Author4 from '@/assets/author4.png';
import Tick from '@/assets/tick.svg';
import Cover from '@/assets/Cover.png';
import fileDownload from '@/assets/fileDownload.svg';
const ArticleCard = ({ArticleTitle,ArticleTopic,Category,PublishedDate,AuthorImage,AuthorName, onClick}) => {
  return (
    <div className='h-[220px] w-[1000px] bg-white rounded-[14px] flex justify-between items-center overflow-hidden cursor-pointer' onClick={onClick}>
        <div className="h-[210px] w-[700px] flex justify-center items-center">
            <div className="h-[190px] w-[680px]">
                <div className="h-[42px] w-[560px] text-[15px] font-semibold">{ArticleTitle}</div>
                <div className="h-[25px] w-[400px] mt-[15px] flex justify-start">
                    <div className="h-[22px] text-[12px] bg-[#FFEAE9]  rounded-[3px] text-[#F36760] p-[3px]">{ArticleTopic}</div>
                    <div className="h-[22px] text-[12px] bg-white text-[#F36760] border-[2px] border-[#F36760] ml-[10px] px-[3px]">{Category}</div>
                    <div className="h-[22px] text-[12px] text-[#545454] ml-[10px] flex justify-center items-center  ">{PublishedDate}</div>
                </div>
                <div className="h-[25px] w-[400px] mt-[5px] flex justify-start items-center gap-[10px]">
                    <div className="h-[20px] flex " ><img className='h-[20px] w-[20px] rounded-[10px] mr-[3px]' src={AuthorImage} alt="author 1" /><p className='h-[20px] text-[12px] text-[#545454]'>{AuthorName}</p></div>
                    <div className="h-[20px] flex  " >
                        <img className='h-[20px] w-[20px] rounded-[10px] z-30 border-[1px] border-[white]' src={Author2} alt="author 2" /><img className='h-[20px] w-[20px] rounded-[10px] ml-[-5px] z-20 border-[1px] border-[white]' src={Author3} alt="author 3" /><img className='h-[20px] w-[20px] rounded-[10px] border-[1px] border-[white] ml-[-10px] z-10' src={Author4} alt="author 4" />
                        <p className='h-[20px] text-[12px] text-[#545454] ml-[3px]'>+ others</p>
                    </div>
                </div>
                <div className="h-[70px] w-[200px] flex justify-start items-end ">
                <div className="h-[20px] w-[200px] flex justify-start items-center bg-white gap-[3px] ">
                    <div className="h-[13px] w-[13px] rounded-full bg-[#F36760] flex justify-center items-center"><img className='w-[9px] h-[7px]' src={Tick} alt="tick" /></div>
                    <p className='text-[15px] font-semibold'>Source:</p>
                    <p className='text-[15px] text-[#545454]'>Crossref</p>
                </div>
                </div>
            </div>
        </div>
        <div className="h-[210px] w-[150px] flex justify-center items-center" >
            <div className="h-[190px] w-[110px] bg-[#F9FAFB] rounded-[6px] flex flex-col justify-center items-center">
                <div className="h-[145px] w-[100px]"><img src={Cover} alt="" /></div>
                <div className="h-[25px] w-[100px] bg-[#F36760] rounded-[6px] mt-[5px] flex justify-between items-center">
                    <div className="h-[15px] w-[25px] flex justify-center item-center"><img className = "h-[15px] w-[14px]" src={fileDownload} alt="file download" /></div>
                    <p className=' h-[15px] w-[70px] text-[11px] text-[#fff] border-l-[2px] border-l-white font-semibold flex justify-center item-center'>Download</p>
                </div>
            </div>
        </div>

    </div>


  )
}

export default ArticleCard
