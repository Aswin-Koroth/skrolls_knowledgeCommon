import Stat from '@/assets/statistic.png';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '@/lib/apiClient'; // Adjust the path based on your setup
import CollegeCard from '@/components/Knowledgecommon/CollegeCard';

const DepartmentSection = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await apiClient.get('Department/');
        setDepartments(response.data); // Store the entire department data
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 custom-lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-auto h-full ">
      {departments.map((department) => (
        <CollegeCard
          key={department.id}
          HeroImg={Stat} // Use the icon field from the backend
          Title={department.department_name} // Display department name
          onClick={() => navigate(`/department/${department.id}`)} // Navigate to a dynamic route (adjust if necessary)
        />
      ))}
    </div>
  );
};

export default DepartmentSection;

