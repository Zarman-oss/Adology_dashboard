import PrimaryButton from '@/components/ui/PrimaryButton';
import CarouselContainer from './CarouselContainer';
import CarouselNavigationButton from './CarouselNavigationButton';

type CarouselProps = {
  carouselNumber?: number | string;
  logo?: string;
  titleText: string;
};

export default function Carousel({
  carouselNumber,
  logo,
  titleText,
}: CarouselProps) {
  return (
    <>
      {/* Header */}
      <div className='flex items-center justify-between mt-4 flex-wrap gap-4'>
        {/* Left side: Number/Logo + Text */}
        <div className='flex items-center gap-2'>
          {carouselNumber && (
            <span className='bg-white w-8 aspect-square rounded-full text-black font-semibold text-sm flex items-center justify-center'>
              {carouselNumber}
            </span>
          )}

          {logo && <img src={logo} alt='carousel logo' />}

          <p className='text-white text-body-2 font-medium'>{titleText}</p>
        </div>

        {/* Right side: Action button */}
        <PrimaryButton text='View Details' />
      </div>

      {/* Cards */}
      <CarouselContainer />

      {/* Carousel Navigation */}
      <CarouselNavigationButton />
    </>
  );
}
