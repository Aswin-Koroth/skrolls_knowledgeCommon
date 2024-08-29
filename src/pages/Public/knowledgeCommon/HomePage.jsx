import LogoHeader from '@/components/Knowledgecommon/LogoHeader';
import React from 'react'
import CollegeHeader from '@/components/Knowledgecommon/CollegeHeader';
import SearchTab from '@/components/Knowledgecommon/SearchTab';
import SelectionTAb from '@/components/Knowledgecommon/SelectionTAb';
import It from '@/assets/IT.png';
import CollegeCard from '@/components/Knowledgecommon/CollegeCard';
import Stat from '@/assets/statistic.png';
import Maths from '@/assets/maths.png';
import Pe from '@/assets/pE.png'

const HomePage = () => {
  return (
    <div>
      <LogoHeader/>
      <CollegeHeader/>
      <div className="h-[600px] w-[full] bg-[#F5F5F5]">
      <SearchTab/>
      <SelectionTAb/>
      <div className="h-[750px] w-full flex justify-center">
        <div className="h-full w-[94%] flex flex-wrap gap-[15px]">
        <CollegeCard HeroImg={It} Title="Department of Informations Technology"/>
        <CollegeCard HeroImg={Stat} Title="Department of Statistics"/>
        <CollegeCard HeroImg={Maths} Title="Department of Mathematics"/>
        <CollegeCard HeroImg={Pe} Title="Department of Physical Education"/>
        </div>

      </div>
      </div>
    </div>
  )
}

export default HomePage
