import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

function PublicLayout() {
  return (
    <div className="flex h-screen">
      <section className="flex min-w-0 flex-1 flex-col">
        <Header />
        <Outlet />
      </section>
    </div>
  );
}

export default PublicLayout;
