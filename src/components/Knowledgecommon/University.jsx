import ArrowRight from '@/assets/arrow_forward.svg';
import KannurUniversity from '@/assets/ku.png';

const University = () => {
  return (
    <div className="h-[160px] w-[425px] bg-[white] flex items-center rounded-[18px] p-1 border-[2px] relative before:content-[''] before:absolute before:h-[100px] before:w-full before:border-l-[4px] before:border-red-500">
        <div className="h-full w-[140px] flex justify-center items-center">
            <div className="h-[140px] w-[140px] rounded-[10px] border-[2px] flex justify-center items-center">
                <img className="h-[100px]" src={KannurUniversity} alt="" />
            </div>
        </div>
        <div className="h-full w-[260px] p-2">
        <p className="text-[16px] font-medium">Research Paper1</p>
        <p className="text-[14px] font-semibold text-[#A7A7A7]">This research paper provide detailed explanation...</p>
        </div>
        <div className="h-full w-[20px] flex justify-end items-end mb-[40px] mr-[10px]">
            <img className="h-[14px]" src={ArrowRight} alt="" />
        </div>
   </div>
  )
}

export default University
