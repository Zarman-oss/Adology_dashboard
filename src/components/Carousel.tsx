import CarouselCard from '@/components/ui/CarouselCard';
import PrimaryButton from '@/components/ui/PrimaryButton';
import CarouselNavigationButton from './ui/CarouselNavigationButton';

export default function Carousel() {
  return (
    <>
      <div className='flex items-center justify-between mt-6 '>
        <div className='flex flex-wrap gap-2 '>
          <span className='bg-white rounded-[100px] px-[10px] flex items-center justify-center'>
            1
          </span>
          <p className='text-white'>
            Highlighting Product Benefits with Visual Proof
          </p>
        </div>
        <PrimaryButton text='View Details' />
      </div>

      {/* cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto mt-4'>
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </div>
      {/* Carousel Navigation */}
      <CarouselNavigationButton />
    </>
  );
}
