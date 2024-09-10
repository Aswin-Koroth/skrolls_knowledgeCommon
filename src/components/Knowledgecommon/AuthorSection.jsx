import React from 'react'
import { useNavigate } from 'react-router-dom';
import Student from '@/assets/Student.png';
import AuthorCard from '@/components/Knowledgecommon/AuthorCard';
const AuthorSection = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-[1000px] flex flex-wrap gap-[5px]">
    <AuthorCard AuthorName="Dr. Bonnie Barstow " AuthorPosition='Student' AuthorProfile={Student} onClick={() => navigate('/public/authorPage')}/>
    <AuthorCard AuthorName="Dr. Bonnie Barstow " AuthorPosition='Student' AuthorProfile={Student} />
    <AuthorCard AuthorName="Dr. Bonnie Barstow " AuthorPosition='Student' AuthorProfile={Student} />
        
    </div>

  )
}

export default AuthorSection
