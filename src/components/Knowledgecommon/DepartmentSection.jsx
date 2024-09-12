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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 custom-lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 bg-yellow-300 w-auto h-full">
    <CollegeCard
      HeroImg={It}
      Title="Department of Information Technology"
      onClick={() => navigate('/result')}
    />
    <CollegeCard HeroImg={Stat} Title="Department of Statistics" />
    <CollegeCard HeroImg={Maths} Title="Department of Mathematics" />
    <CollegeCard HeroImg={Pe} Title="Department of Physical Education" />
    <CollegeCard HeroImg={Pe} Title="Department of Physical Education" />
    <CollegeCard HeroImg={Pe} Title="Department of Physical Education" />
    <CollegeCard HeroImg={Pe} Title="Department of Physical Education" />
    <CollegeCard HeroImg={Pe} Title="Department of Physical Education" />
  </div>
  
  );
};

export default DepartmentSection;
