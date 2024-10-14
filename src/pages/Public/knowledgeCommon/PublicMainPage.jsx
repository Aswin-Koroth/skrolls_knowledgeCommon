import PublicHeader from "@/components/Knowledgecommon/PublicHeader";
import SerachTab from "@/components/Knowledgecommon/SearchTab";
import RecentSearch from '@/assets/recent.svg';
import ViewAll from '@/components/Knowledgecommon/VeiwAll';
import ResearchPaperCard from "@/components/Knowledgecommon/ResearchPaperCard";
import Cap from '@/assets/Vectorcap.svg';
import University from "@/components/Knowledgecommon/University";


const PublicMainPage = () => {
  return (
    <div className="h-full w-full bg-[#F5F5F5]">
        <PublicHeader/>
        <div className="h-[200px] w-full pt-[190px]">
            <SerachTab filter={false} />
        </div>
        <div className="h-[300px] w-full pt-[30px] flex flex-col justify-center items-center ">
            <div className="h-[30px] w-[900px] flex justify-end items-end">
                <div className="h-[30px] w-[300px] flex justify-center items-center gap-2"><img className="h-[18px]" src={RecentSearch} alt="" /><p className="text-[#B6B6B6] text-[16px] font-medium">Recent Search</p></div>
                <ViewAll/>
            </div>
            <div className="w-[900px] flex justify-evenly flex-wrap gap-[25px] pt-[10px] mt-[24px]">
                <ResearchPaperCard/>
                <ResearchPaperCard/>
                <ResearchPaperCard/>
                <ResearchPaperCard/>
            </div>
        </div>
        <div className="h-[500px] w-full flex flex-col justify-start items-center mt-[24px]">
            <div className="h-[30px] w-[900px] flex justify-end items-end">
                    <div className="h-[30px] w-[300px] flex justify-center items-center gap-2"><img className="h-[18px]" src={Cap} alt="" /><p className="text-[black] text-[16px] font-medium">Search by universities</p></div>
                    <ViewAll/>
                </div>
            <div className="w-[900px] flex flex-wrap justify-between pt-[10px] gap-y-5 mt-[24px]">
                <University/>
                <University/>
                <University/>
                <University/>
            </div>

        </div>

    </div>
  )
}

export default PublicMainPage
