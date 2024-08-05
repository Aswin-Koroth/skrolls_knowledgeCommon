import { Outlet } from 'react-router-dom';
import Navpanel from '../components/Navpanel/Navpanel';
import Header from '../components/Header/Header';

function AdminLayout() {
  return (
    <div className="flex h-screen">
      <Navpanel />
      <section className="flex min-w-0 flex-1 flex-col">
        <Header />
        <Outlet />
      </section>
    </div>
  );
}

export default AdminLayout;
