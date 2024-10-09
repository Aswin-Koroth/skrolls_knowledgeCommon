import LogoHeader from '@/components/Knowledgecommon/LogoHeader';
import React from 'react';
import CollegeHeader from '@/components/Knowledgecommon/CollegeHeader';
import SearchTab from '@/components/Knowledgecommon/SearchTab';
import DepartmentSection from '@/components/Knowledgecommon/DepartmentSection';
import AuthorSection from '@/components/Knowledgecommon/AuthorSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const HomePage = () => {
  return (
    <div>
      <LogoHeader />
      <CollegeHeader />
      <div className="bg-bg-muted h-full w-full">
        <SearchTab />

        <Tabs
          defaultValue="department"
          className="flex w-full flex-col items-center"
        >
          <TabsList className="mb-6 justify-between rounded-none">
            <TabsTrigger
              value="department"
              className="w-28 px-4 text-base data-[state=active]:border-b-2 data-[state=active]:border-black"
            >
              Department
            </TabsTrigger>
            <TabsTrigger
              value="author"
              className="w-28 px-4 text-base data-[state=active]:border-b-2 data-[state=active]:border-black"
            >
              Author
            </TabsTrigger>
          </TabsList>
          <TabsContent value="department" className="w-full px-20">
            <DepartmentSection />
          </TabsContent>
          <TabsContent value="author" className="w-full px-20">
            <AuthorSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HomePage;
