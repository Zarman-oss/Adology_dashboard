import { LucideChevronLeft, LucideChevronRight, LucideDot } from 'lucide-react';

export default function CarouselNavigationButton() {
  return (
    <div className='flex items-center justify-between mt-2'>
      {/* Indicator */}
      <div className='rounded-full p-1 bg-secondary-white-900 flex items-center justify-center'>
        <LucideDot color='white' height={20} width={20} />
        <LucideDot color='white' height={20} width={20} />
        <LucideDot color='white' height={20} width={20} />
        <LucideDot color='white' height={20} width={20} />
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
