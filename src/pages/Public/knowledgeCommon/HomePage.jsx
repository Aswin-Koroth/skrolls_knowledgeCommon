import LogoHeader from '@/components/Knowledgecommon/LogoHeader';
import React from 'react'
import CollegeHeader from '@/components/Knowledgecommon/CollegeHeader';
import SearchTab from '@/components/Knowledgecommon/SearchTab';
import DepartmentSection from '@/components/Knowledgecommon/DepartmentSection';
import AuthorSection from '@/components/Knowledgecommon/AuthorSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';


const HomePage = () => {
  const [activeTab, setActiveTab] = useState('department'); 

  const handleTabChange = (value) => {
    setActiveTab(value); 
  };
  return (
    <div>
      <LogoHeader/>
      <CollegeHeader/>
      <div className="h-[600px] w-[full] bg-[#F5F5F5]">
      <SearchTab/>
      <Tabs defaultValue="department" >
        <div className="h-[50px] w-full flex justify-center items-center">      
          <TabsList className='h-[40px] w-[900px] border-b-2 border-b-slate-300 bg-transparent flex justify-center gap-1 mt-[-40px]'>
          <div
            className={`h-[40px] w-[100px] flex items-end justify-end cursor-pointer ${
              activeTab === 'department' ? 'border-b-2 border-b-slate-700 font-bold text-black' : ''
            }`}
            onClick={() => handleTabChange('department')}>
            <TabsTrigger className='' value="department">Department</TabsTrigger>
          </div>

          <div
            className={`h-[40px] w-[100px] flex items-center justify-center cursor-pointer ${
              activeTab === 'author' ? 'border-b-2 border-b-slate-700 font-bold text-black' : ''
            }`}
            onClick={() => handleTabChange('author')}>
            <TabsTrigger value="author">Author</TabsTrigger>
          </div>
          </TabsList>
        </div>
        <TabsContent className=' w-full flex justify-center' value="department"><DepartmentSection/></TabsContent>
        <TabsContent className=' w-full flex justify-center' value="author"><AuthorSection /></TabsContent>
      </Tabs>

      </div>
    </div>
  )
}

export default HomePage
