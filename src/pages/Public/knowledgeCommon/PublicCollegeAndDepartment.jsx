import PublicCollegePage from '@/components/Knowledgecommon/PublicCollegePage';
import PublicHeader from '@/components/Knowledgecommon/PublicHeader';
import SearchTab from '@/components/Knowledgecommon/SearchTab';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';
import DepartmentSection from '@/components/Knowledgecommon/DepartmentSection';

const PublicCollegeAndDepartment = () => {
  const [activeTab, setActiveTab] = useState('College'); 

  const handleTabChange = (value) => {
    setActiveTab(value); 
  };
  return (
    <div className="h-full w-full bg-[#F5F5F5]">
      <PublicHeader/>
      <div className="h-[200px] w-full pt-[190px] mt-[-230px] pl-[50px]">
        <SearchTab filter={false}/>
      </div>
      <div className="h-full w-full mt-[50px] ">
      <Tabs defaultValue="college">
        <div className="h-[50px] w-full flex justify-center items-center">      
          <TabsList className='h-[40px] w-[900px] border-b-2 border-b-slate-300 bg-transparent flex justify-center gap-1 mt-[-40px]'>
            <div
              className={`h-[40px] w-[100px] flex items-center justify-end cursor-pointer ${
                activeTab === 'college' ? 'border-b-2 border-b-slate-700 font-bold text-black' : ''
              }`}
              onClick={() => handleTabChange('college')}>
              <TabsTrigger className='h-[40px]' value="college">College</TabsTrigger>
            </div>

            <div
              className={`h-[40px] w-[100px] flex items-center justify-center cursor-pointer ${
                activeTab === 'department' ? 'border-b-2 border-b-slate-700 font-bold text-black' : ''
              }`}
              onClick={() => handleTabChange('department')}>
              <TabsTrigger className='h-[40px]' value="department">Department</TabsTrigger>
            </div>
          </TabsList>
        </div>
        <TabsContent className='w-full flex justify-center' value="college"><PublicCollegePage/></TabsContent>
        <TabsContent className='w-full flex justify-center' value="department"><DepartmentSection/></TabsContent>
      </Tabs>
      </div>


    </div>
  )
}

export default PublicCollegeAndDepartment
