import { navItems } from '@/data/navItems';
import {
  LucideBell,
  LucideChevronDown,
  LucideSettings,
  LucideUserPlus,
  LucideX,
} from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import Divider from './ui/Divider';
import SecondaryButton from './ui/SecondaryButton';

export default function SideBar() {
  const [showMenu, setShowMenu] = useState(false); // Fixed: Single useState declaration
  const [activeFilter, setActiveFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      category: 'team',
      title: 'New Ad Added',
      message:
        'James has added a new ad in Default Board. Check it out to stay updated!',
      time: '2h',
      read: false,
    },
    {
      category: 'team',
      title: 'Ad Updated',
      message:
        'James has updated an ad in Default Board. Review the changes and ensure everything aligns with the strategy.',
      time: '3h',
      read: false,
    },
    {
      category: 'team',
      title: 'Ad Removed',
      message:
        'James has deleted an ad from Default Board. Make sure no important content was lost.',
      time: '4h',
      read: true,
    },

    {
      category: 'update',
      title: 'New Feature: Experiment Module',
      message:
        'The Experiment Module is now available! Try it out and enhance your campaign strategies.',
      time: '5h',
      read: true,
    },
    {
      category: 'update',
      title: 'System Update Scheduled',
      message:
        'System maintenance is planned for 2/11/2025. Some features may be temporarily unavailable.',
      time: '6h',
      read: true,
    },
    {
      category: 'update',
      title: 'Performance Improvements',
      message:
        "We've optimized the platform for better performance. Enjoy faster loading times and smoother navigation.",
      time: '6h',
      read: true,
    },
  ]);

  const filteredNotifications =
    activeFilter === 'all'
      ? notifications
      : notifications.filter((n) => n.category === activeFilter);

  return (
    <aside className='hidden md:flex flex-col sticky top-0 h-[900px] rounded-2xl sidebar-container sidebar-gradient'>
      {/* Header */}
      <div className='flex items-center justify-between mb-4 flex-wrap relative'>
        <div className='flex items-center gap-2'>
          <img src='/svg/Logo.svg' alt='logo' className='w-6 h-6' />
          <span className='text-heading-6 font-bold text-white'>ADOLOGY</span>
        </div>

        <div className='flex items-center gap-2 relative'>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className='p-2 bg-secondary-white-900 rounded-full flex items-center justify-center relative'
          >
            <LucideBell
              width={18}
              height={18}
              className='text-white cursor-pointer'
            />
          </button>
          {/* Notification Menu */}
          {showMenu && (
            <div className='absolute top-12 right-0 w-64 bg-secondary-white-900 outline-bg=secondary-white-800 rounded-lg p-3 z-10 shadow-lg'>
              <div className='flex items-center justify-between'>
                <h4 className='text-body-2 font-medium mb-2 text-white'>
                  Notifications
                </h4>
                <LucideX
                  color='white'
                  onClick={() => setShowMenu(false)}
                  className='cursor-pointer'
                />{' '}
                {/* Close button */}
              </div>
              {/* Filter Tabs */}
              <div className='flex gap-2 mb-2 text-xs text-gray-300'>
                <button
                  className={`px-2 py-1 rounded ${
                    activeFilter === 'all' ? 'bg-gray-700 text-white' : ''
                  }`}
                  onClick={() => setActiveFilter('all')}
                >
                  All
                </button>
                <button
                  className={`px-2 py-1 rounded ${
                    activeFilter === 'team' ? 'bg-gray-700 text-white' : ''
                  }`}
                  onClick={() => setActiveFilter('team')}
                >
                  Team
                </button>
                <button
                  className={`px-2 py-1 rounded ${
                    activeFilter === 'update' ? 'bg-gray-700 text-white' : ''
                  }`}
                  onClick={() => setActiveFilter('update')}
                >
                  Update
                </button>
              </div>
              <ul className='flex flex-col gap-2 max-h-60 overflow-y-auto'>
                {filteredNotifications.map((notification, i) => (
                  <li
                    key={i}
                    className={`p-2 text-sm rounded-md cursor-pointer ${
                      notification.read ? 'text-gray-500' : 'text-white'
                    }`}
                  >
                    <div className='flex items-center gap-2'>
                      {notification.category === 'team' ? (
                        <span className='text-green-500'>🔔</span>
                      ) : (
                        <span className='text-yellow-500'>💡</span>
                      )}
                      <div>
                        <strong>{notification.title}</strong>
                        <p className='text-xs'>{notification.message}</p>
                        <span className='text-xs text-gray-400'>
                          {notification.time} ago
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* User avatar */}
          <img
            src='/svg/icon.svg'
            alt='user'
            className='w-6 h-6 rounded-full'
          />
        </div>
      </div>

      <Divider className='mt-4 mb-4' />

      {/* nav */}
      <div className='mt-4 flex flex-col gap-4'>
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
        <NavLink to='/invite'>
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
