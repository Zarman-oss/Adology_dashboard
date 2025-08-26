import { Outlet } from 'react-router';
import SideBar from '@/components/SideBar';

export default function Layout() {
  return (
    <div className='wrapper mt-6 gap-4 flex'>
      <SideBar />
      <main className='flex-1 min-h-screen rounded-2xl'>
        {/* yahan child routes render honge */}
        <Outlet />
      </main>
    </div>
  );
}
