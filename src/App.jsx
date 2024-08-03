import Header from './components/Header/Header';
import Navpanel from './components/Navpanel/Navpanel';

import { Overlays } from './components/Overlays';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'));
const AdminContent = lazy(() => import('./pages/Admin/AdminContent'));
const AdminUniversity = lazy(() => import('./pages/Admin/AdminUniversity'));
const AdminCollege = lazy(() => import('./pages/Admin/AdminCollege'));
const AdminDepartment = lazy(() => import('./pages/Admin/AdminDepartment'));
const AdminUser = lazy(() => import('./pages/Admin/AdminUser'));
const AdminReports = lazy(() => import('./pages/Admin/AdminReports'));
const AdminSettings = lazy(() => import('./pages/Admin/AdminSettings'));

function App() {
  return (
    <div className="flex h-screen">
      <Navpanel />
      <section className="flex min-w-0 flex-1 flex-col">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/contents_list" element={<AdminContent />} />
            <Route path="/universities_list" element={<AdminUniversity />} />
            <Route path="/colleges_list" element={<AdminCollege />} />
            <Route path="/departments_list" element={<AdminDepartment />} />
            <Route path="/users_list" element={<AdminUser />} />
            <Route path="/reports" element={<AdminReports />} />
            <Route path="/settings" element={<AdminSettings />} />
          </Routes>
        </Suspense>
      </section>
      <Overlays />
    </div>
  );
}

export default App;
