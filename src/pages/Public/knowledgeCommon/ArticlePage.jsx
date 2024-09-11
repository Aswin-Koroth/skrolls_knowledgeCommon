import ArticleTitle from '@/components/Knowledgecommon/ArticleTitle';
import BreadCrumbs from '@/components/Knowledgecommon/BreadCrumbs';
import LogoHeader from '@/components/Knowledgecommon/LogoHeader';
import React from 'react';
import Author1 from '@/assets/author1.png';
import AuthorChips from '@/components/Knowledgecommon/AuthorChips';
import AuthorSubtitles from '@/components/Knowledgecommon/AuthorSubtitles';
import AuthorContentChips from '@/components/Knowledgecommon/AuthorContentChips';
import AuthorReferenceChips from '@/components/Knowledgecommon/AuthorReferenceChips';
import Cover from '@/assets/Cover.png'

const ArticlePage = () => {
  return (
    <div>
      <LogoHeader/>
      <BreadCrumbs />
      <ArticleTitle/>
      <div className="h-[900px] w-full flex justify-center item-center">
        <div className="h-[900px] w-[1050px] flex justify-between items-start ">
            <div className="h-full w-[720px] ">
                <div className="h-[96px] w-[720px] bg-white rounded-[14px] flex flex-col ">
                    <AuthorSubtitles AuthorSubTitles="Author" />
                    <AuthorChips AuthorImage={Author1} AuthorName="A Majeed"/>
                </div>
                <div className="h-[325px] w-[720px] bg-[white] rounded-[14px] flex flex-col mt-[10px]">
                    <AuthorSubtitles AuthorSubTitles="Abstract" />
                    <p className='h-[220px] w-[662px] text-[16px] font-normal ml-[20px] text-[#545454] mt-[5px] text-justify'>We present a novel design of an augmented reality interface to support indoor navigation. We combine activity-based instructions with sparse 3D localisation at selected info points in the building. Based on localisation accuracy and the users' activities, such as walking or standing still, the interface adapts the visualisation by changing the density and quality of information shown. We refine and validate our design through user involvement in pilot studies. We finally present the results of a comparative study conducted to validate the effectiveness of our design and to explore how the presence of info points affects users' performance on indoor navigation tasks. The results of this study validate our design and show an improvement in task performance when info points are present, which act as confirmation points and provide an overview of the task.
                    </p>
                </div>
                <div className="h-[130px] w-[720px] bg-[white] rounded-[14px] mt-[10px] px-[20px] py-[10px] space-y-[5px] ">
                    <AuthorSubtitles AuthorSubTitles="Keywords" />
                    <AuthorContentChips AuthorContent='Digital Transformation' />
                    <AuthorContentChips AuthorContent='Business Growth' />
                    <AuthorContentChips AuthorContent='Innovation' />
                    <AuthorContentChips AuthorContent='Technology' />
                    <AuthorContentChips AuthorContent='Digital Ecosystem' />
                    <AuthorContentChips AuthorContent='Customer Centricity' />
                </div>
                <div className="h-[245px] w-[720px] bg-[white] mt-[15px] rounded-[14px] px-[20px] py-[10px] space-y-[5px] ">
                    <AuthorSubtitles AuthorSubTitles="References" />
                    <AuthorReferenceChips AuthorReference="Abowd, G. D., Atkeson, C. G., Hong, J., Long, S., Kooper, R., and Pinkerton, M. Cyberguide: a mobile context-aware tour guide. Wireless Networks 3, (1997), 421--433. " />
                    <AuthorReferenceChips AuthorReference="Addlesee, M., Curwen, R., Hodges, S., et al. Implementing a Sentient Computing System. Computer 34, (2001), 50--56. " />
                    <AuthorReferenceChips AuthorReference="Azuma, R. A Survey of Augmented Reality. Presence 6, 4 (1997), 355--385." />
                </div>
            </div>
            <div className="h-[560px] w-[315px] flex justify-start items-start">
                <div className="h-[510px] w-[315px] bg-white rounded-[14px] space-y-[5px] ">
                <AuthorSubtitles AuthorSubTitles="Journal Name" />
                <AuthorContentChips AuthorContent='Journal of Digital Business and Innovation' />
                <AuthorSubtitles AuthorSubTitles="Volume and Issue Number" />
                <AuthorContentChips AuthorContent='Volume 12, Issue 3' />
                <AuthorSubtitles AuthorSubTitles="Publication Date" />
                <AuthorContentChips AuthorContent='August 2024' />
                <AuthorSubtitles AuthorSubTitles="DOI" />
                <AuthorContentChips AuthorContent='10.12345/jdbi.v12i3.6789' />
                <AuthorSubtitles AuthorSubTitles="Attatchments" />
                <div className="h-[126px] w-full flex justify-center items-center ">
                    <div className="h-full w-[265px] rounded-[7px] border-[2px] flex p-[5px]  ">
                        <img className='h-[80px] w-[88px] object-contain mt-[5pxpx]' src={Cover} alt="" />
                        <div className="h-full w-[180px] ">
                            <div className="w-full h-[40px] "><p className='text-[12px] font-semibold py-[3px] break-words'>Supplementary_Data_Innovative_Strategies.pdf</p></div>
                            <div className="h-[65px] w-[full] mt-[8px]">
                                <p className='text-[10px] font-light'>128kb</p>
                                <div className="h-[50px] w-[180px] bg-[#982B35] hover:bg-[#b63340] transition-colors delay-200 rounded-[6px] flex justify-center items-center text-[10px] font-semibold text-[#fff]">Download</div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
