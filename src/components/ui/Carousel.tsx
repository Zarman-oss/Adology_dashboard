import PrimaryButton from '@/components/ui/PrimaryButton';
import CarouselContainer from './CarouselContainer';
import CarouselNavigationButton from './CarouselNavigationButton';

export default function Carousel({ carouselnumber }) {
  return (
    <>
      <div className='flex items-center justify-between mt-6 flex-wrap'>
        <div className='flex gap-2 items-center '>
          <span className='bg-white rounded-full px-[10px] flex items-center justify-center'>
            {carouselnumber}
          </span>
          <p className='text-white text-body-2 font-medium'>
            Highlighting Product Benefits with Visual Proof
          </p>
        </div>
        <PrimaryButton text='View Details' />
      </div>

      {/* cards */}
      <CarouselContainer />
      {/* Carousel Navigation */}
      <CarouselNavigationButton />
    </>
  );
}
