import { apiClient } from '@/lib/apiClient';
import { useEffect, useState } from 'react';


const Trail = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await apiClient.get('/Department/');
        const departmentNames = response.data.map(dept => dept.department_name); // Extract only department_name
        setDepartments(departmentNames); // Store the department names
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <div>
      <h1>Department List</h1>
      <ul>
        {departments.map((department, index) => (
          <li key={index}>{department}</li> // Display each department name
        ))}
      </ul>
    </div>
  );
};

export default Trail;