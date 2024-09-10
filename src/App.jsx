import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';

const Home = lazy(() => import('./pages/Public/Home'));

// const PublicLayout = lazy(() => import('./layouts/PublicLayout'));
// const UserLayout = lazy(() => import('./layouts/UserLayout'));
// const LibrarianLayout = lazy(() => import('./layouts/LibrarianLayout'));
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));

const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'));
const AdminContent = lazy(() => import('./pages/Admin/AdminContent'));
const AdminUniversity = lazy(() => import('./pages/Admin/AdminUniversity'));
const AdminCollege = lazy(() => import('./pages/Admin/AdminCollege'));
const AdminDepartment = lazy(() => import('./pages/Admin/AdminDepartment'));
const AdminUser = lazy(() => import('./pages/Admin/AdminUser'));
const AdminReports = lazy(() => import('./pages/Admin/AdminReports'));
const AdminSettings = lazy(() => import('./pages/Admin/AdminSettings'));
const PublicHome = lazy(() => import('./pages/Public/Home'));
const HomePage = lazy(() => import('./pages/Public/knowledgeCommon/HomePage'));
const ResultPage = lazy(
  () => import('./pages/Public/knowledgeCommon/ResultPage')
);
const ArticlePage = lazy(
  () => import('./pages/Public/knowledgeCommon/ArticlePage')
);
const AuthorPage = lazy(
  () => import('./pages/Public/knowledgeCommon/AuthorPage')
);
function App() {
  return (
    <Routes>
      {/* <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route> */}

      {/* <Route element={<UserLayout />}>
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/user/profile" element={<UserProfile />} />
        </Route> */}

      {/* <Route element={<LibrarianLayout />}>
          <Route path="/librarian" element={<LibrarianDashboard />} />
        </Route> */}

      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/contents_list" element={<AdminContent />} />
        <Route path="/admin/universities_list" element={<AdminUniversity />} />
        <Route path="/admin/colleges_list" element={<AdminCollege />} />
        <Route path="/admin/departments_list" element={<AdminDepartment />} />
        <Route path="/admin/users_list" element={<AdminUser />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Route>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<PublicHome />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/authorPage" element={<AuthorPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
