import {
  LucideBell,
  LucideChevronDown,
  LucideDraftingCompass,
  LucideHatGlasses,
  LucideHome,
  LucideMessageCircle,
  LucideNotebook,
  LucideSearch,
  LucideSettings,
  LucideShoppingBag,
  LucideUserPlus,
} from 'lucide-react';
import Divider from './ui/Divider';
import SecondaryButton from './ui/SecondaryButton';

export default function SideBar() {
  return (
    <aside className='hidden md:block flex-1 rounded-2xl stick top-0  sidebar-container sidebar-gradient'>
      {/* Logo and Header */}
      <div className='flex items-center justify-between mt-6 mb-6'>
        {/* Logo + Text */}
        <div className='flex items-center gap-2'>
          <img src='/svg/Logo.svg' alt='logo' className='w-6 h-6' />
          <span className='text-heading-6 font-bold text-white'>ADOLOGY</span>
        </div>

        {/* Notifications + Profile Icon */}
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
      <Divider />
      {/* navigation menus */}
      <div className='mt-6 flex flex-col gap-6 mb-32'>
        <SecondaryButton
          text='Nadira Sleep'
          imgSrc='/svg/Nadira.svg'
          className='text-white bg-secondary-white-900 flex items-center justify-between'
          icon={<LucideChevronDown />}
        />
        <SecondaryButton
          icon={<LucideHome />}
          text='Brands'
          className='text-white flex items-center'
        />
        <SecondaryButton
          icon={<LucideSearch />}
          text='Inspire'
          className='text-black bg-white flex items-center'
        />
        <SecondaryButton
          text='Market Intelligence'
          icon={<LucideShoppingBag />}
          className='text-white flex items-center'
        />
        <SecondaryButton
          text='Ad Spend'
          icon={<LucideDraftingCompass />}
          className='text-white flex items-center'
        />
        <SecondaryButton
          text='Track Band'
          icon={<LucideHatGlasses />}
          className='text-white flex items-center'
        />
        <SecondaryButton
          text='Brief Module'
          icon={<LucideNotebook />}
          className='text-white flex items-center'
        />
        <SecondaryButton
          text='Inquire'
          icon={<LucideMessageCircle />}
          className='text-white flex items-center'
        />
      </div>

      <Divider />
      {/* setting */}

      <div className='flex flex-col gap-2 mt-6'>
        <SecondaryButton
          text='Setting'
          className='text-white flex items-center'
          icon={<LucideSettings />}
        />
        <SecondaryButton
          text='Invite'
          className='text-white flex items-center'
          icon={<LucideUserPlus />}
        />
      </div>
    </aside>
  );
}
