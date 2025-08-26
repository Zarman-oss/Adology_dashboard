import {
  LucideBell,
  LucideChevronDown,
  LucideSettings,
  LucideUserPlus,
} from 'lucide-react';
import { NavLink } from 'react-router';
import Divider from './ui/Divider';
import SecondaryButton from './ui/SecondaryButton';
import { navItems } from '@/data/navItems';

export default function SideBar() {
  return (
    <aside className='hidden md:flex flex-col sticky top-0 h-screen rounded-2xl sidebar-container sidebar-gradient'>
      {/* Header */}
      <div className='flex items-center justify-between mb-4 flex-wrap'>
        <div className='flex items-center gap-2'>
          <img src='/svg/Logo.svg' alt='logo' className='w-6 h-6' />
          <span className='text-heading-6 font-bold text-white'>ADOLOGY</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='p-2 bg-secondary-white-900 rounded-full flex items-center justify-center'>
            <LucideBell width={18} height={18} className='text-white' />
          </span>
          <img
            src='/svg/icon.svg'
            alt='user'
            className='w-6 h-6 rounded-full'
          />
        </div>
      </div>

      <Divider className='mt-4 mb-4' />

      {/* nav */}
      <div className='mt-4 flex flex-col gap-4 flex-1'>
        <button className='flex items-center gap-2 text-body-2 hover:bg-white hover:text-black cursor-pointer text-white rounded-full px-4 py-3 bg-secondary-white-900 font-medium'>
          <img src='/svg/Nadira.svg' alt='logo' />
          Nadira Sleep
          <LucideChevronDown className='ml-auto' />
        </button>

        {navItems.map(({ to, text, icon: Icon }) => (
          <NavLink key={to} to={to}>
            {({ isActive }) => (
              <SecondaryButton
                text={text}
                icon={<Icon size={18} />}
                className={`flex items-center ${
                  isActive ? 'bg-white text-black' : 'text-white'
                }`}
              />
            )}
          </NavLink>
        ))}
      </div>

      <Divider className='mt-4 mb-4' />

      {/* settings */}
      <div className='flex flex-col gap-2 mt-4'>
        <NavLink to='/settings'>
          {({ isActive }) => (
            <SecondaryButton
              text='Setting'
              icon={<LucideSettings size={18} />}
              className={`flex items-center ${
                isActive ? 'bg-white text-black' : 'text-white'
              }`}
            />
          )}
        </NavLink>
        <NavLink to='/inactive'>
          {({ isActive }) => (
            <SecondaryButton
              text='Invite'
              icon={<LucideUserPlus size={18} />}
              className={`flex items-center ${
                isActive ? 'bg-white text-black' : 'text-white'
              }`}
            />
          )}
        </NavLink>
      </div>
    </aside>
  );
}
