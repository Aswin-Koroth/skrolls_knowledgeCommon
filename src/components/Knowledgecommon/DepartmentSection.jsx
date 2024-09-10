import React from 'react';
import { useNavigate } from 'react-router-dom';
import It from '@/assets/IT.png';
import CollegeCard from '@/components/Knowledgecommon/CollegeCard';
import Stat from '@/assets/statistic.png';
import Maths from '@/assets/maths.png';
import Pe from '@/assets/pE.png';

const DepartmentSection = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-[94%] flex flex-wrap gap-[15px]">
      <CollegeCard
        HeroImg={It}
        Title="Department of Information Technology"
        onClick={() => navigate('/public/result')}  
      />
      <CollegeCard HeroImg={Stat} Title="Department of Statistics" />
      <CollegeCard HeroImg={Maths} Title="Department of Mathematics" />
      <CollegeCard HeroImg={Pe} Title="Department of Physical Education" />
    </div>
  );
};

export default DepartmentSection;