import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';

export default function CarouselNavigationButton() {
  return (
    <div className='flex items-center justify-between mt-2'>
      {/* Indicator */}
      <div className='rounded-full p-3 bg-secondary-white-900 flex items-center justify-center gap-5'>
        <div className='w-2 h-2 bg-white rounded-full' />
        <div className='w-2 h-2 bg-secondary-white-800 rounded-full' />
        <div className='w-2 h-2 bg-secondary-white-800 rounded-full' />
        <div className='w-2 h-2 bg-secondary-white-800 rounded-full' />
      </div>

      {/* buttons */}
      <div className='flex items-center justify-center gap-2 '>
        <button className='bg-secondary-white-900 rounded-[100px] hover:bg-white text-white hover:text-black  p-2 cursor-pointer'>
          <LucideChevronLeft width={16} height={16} />
        </button>
        <button className='bg-secondary-white-900 rounded-[100px] hover:bg-white text-white hover:text-black p-2 cursor-pointer'>
          <LucideChevronRight width={16} height={16} />
        </button>
      </div>
    </div>
  );
}
