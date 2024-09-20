import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { Suspense } from 'react';
import { LIBRARIAN_NAV_LIST } from '@/data/constants';
import Navpanel from '../components/Navpanel/Navpanel';

function LibrarianLayout() {
  return (
    <div className="flex h-screen">
      <Navpanel navList={LIBRARIAN_NAV_LIST} />
      <section className="flex min-w-0 flex-1 flex-col">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
}

export default LibrarianLayout;
