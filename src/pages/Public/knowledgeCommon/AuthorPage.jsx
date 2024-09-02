import React from 'react'
import LogoHeader from '@/components/Knowledgecommon/LogoHeader';
import CollegeHeader from '@/components/Knowledgecommon/CollegeHeader';
import SearchTab from '@/components/Knowledgecommon/SearchTab';
import Student from '@/assets/Student.png';
import AuthorCard from '@/components/Knowledgecommon/AuthorCard';
import SelectionTAb from '@/components/Knowledgecommon/SelectionTAb';


const AuthorPage = () => {
  return (
    <div>
      <LogoHeader/>
      <CollegeHeader/>
      <div className="h-[600px] w-[full] bg-[#F5F5F5]">
        <SearchTab/>
        <SelectionTAb activeTab = 'authors'/>
        <div className="h-[750px] w-full flex justify-center">
            <div className="h-full w-[1000px] flex flex-wrap gap-[5px]">
            <AuthorCard AuthorName="Dr. Bonnie Barstow " AuthorPosition='Student' AuthorProfile={Student} />
            <AuthorCard AuthorName="Dr. Bonnie Barstow " AuthorPosition='Student' AuthorProfile={Student} />
            <AuthorCard AuthorName="Dr. Bonnie Barstow " AuthorPosition='Student' AuthorProfile={Student} />
                
            </div>

        </div>
      </div>
    </div>
  )
}

export default AuthorPage
