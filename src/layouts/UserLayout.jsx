import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { Suspense } from 'react';

const UserLayout = () => {
  return (
    <div className="flex h-screen">
      <section className="flex min-w-0 flex-1 flex-col">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default UserLayout;
