import React from 'react';
import { useNavigate } from 'react-router-dom';
import Student from '@/assets/Student.png';
import AuthorCard from '@/components/Knowledgecommon/AuthorCard';
const AuthorSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap content-center items-center justify-center gap-10">
      <AuthorCard
        AuthorName="Dr. Bonnie Barstow "
        AuthorPosition="Student"
        AuthorProfile={Student}
        onClick={() => navigate('/authorPage')}
      />
      <AuthorCard
        AuthorName="Dr. Bonnie Barstow "
        AuthorPosition="Student"
        AuthorProfile={Student}
      />
      <AuthorCard
        AuthorName="Dr. Bonnie Barstow "
        AuthorPosition="Student"
        AuthorProfile={Student}
      />
    </div>
  );
};

export default AuthorSection;
