import { Outlet } from 'react-router-dom';
import Navpanel from '../components/Navpanel/Navpanel';
import Header from '../components/Header/Header';
import { Suspense } from 'react';
import { ADMIN_NAV_LIST } from '@/data/constants';

function AdminLayout() {
  return (
    <div className="flex h-screen">
      <Navpanel navList={ADMIN_NAV_LIST} />
      <section className="flex min-w-0 flex-1 flex-col">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
}

export default AdminLayout;
