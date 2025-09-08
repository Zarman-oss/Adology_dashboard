import { Outlet } from 'react-router';
import SideBar from '@/components/SideBar';

export default function Layout() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 mt-6 min-h-screen px-4 sm:px-6 lg:px-8'>
      <aside className='hidden lg:block sticky top-0 h-fit max-h-screen'>
        <SideBar />
      </aside>

      <main className='min-w-0'>
        <Outlet />
      </main>
    </div>
  );
}
