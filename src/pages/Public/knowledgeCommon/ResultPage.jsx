import React from 'react'
import LogoHeader from '@/components/Knowledgecommon/LogoHeader';
import CollegeHeader from '@/components/Knowledgecommon/CollegeHeader';
import SearchTab from '@/components/Knowledgecommon/SearchTab';
import ArticleCard from '../../../components/Knowledgecommon/ArticleCard';
import BreadCrumbs from '../../../components/Knowledgecommon/BreadCrumbs';
import Author1 from '@/assets/author1.png';

const ResultPage = () => {
  return (
    <div>
      <LogoHeader/>
      <CollegeHeader/>
      <div className="h-[800px] w-full bg-[#F9FAFB]">
        <SearchTab />
        <BreadCrumbs/>
        <div className='h-[600px] w-full flex justify-center items-start mt-[10px]'>
        <ArticleCard ArticleTitle="Innovative Strategies for Enhancing Business Growth in the Digital Age" 
        ArticleTopic="Hellenic Plant Protection Journal" Category="Journal article" 
        PublishedDate="01 Jan 2022" AuthorImage={Author1} AuthorName="A. Majeed" />
        </div>
        </div>
    </div>
  )
}

export default ResultPage
