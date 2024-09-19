import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import NavpanelLib from '@/components/Librarian/Navpanel2/NavpanelLib';
import { Suspense } from 'react';

function LibrarianLayout() {
  return (
    <div className="flex h-screen">
      <NavpanelLib />
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
