import Dashboard from '@/components/Dashboard';
import SideBar from '@/components/SideBar';

export default function DashboardPage() {
  return (
    <div className='flex mt-6 justify-center'>
      <SideBar />
      <Dashboard />
    </div>
  );
}
