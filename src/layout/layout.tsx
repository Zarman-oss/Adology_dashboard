import { Outlet } from 'react-router';
import SideBar from '@/components/SideBar';

export default function Layout() {
  return (
    <div className='wrapper mt-6 gap-4 flex'>
      <SideBar />
      <main className='flex-1 '>
        <Outlet />
      </main>
    </div>
  );
}
