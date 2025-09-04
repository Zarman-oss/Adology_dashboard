import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
import CarouselCard from './CarouselCard';
import Divider from './Divider';
import RecommendationsCardButton from './RecommendationsCardButton';

export default function RecommendationsCard() {
  return (
    <div className='bg-secondary-white-900 rounded-xl card-border'>
      <div className='p-3 flex items-center'>
        <div className='flex items-center gap-2'>
          <span className='bg-white w-8 aspect-square rounded-full text-black font-semibold text-sm flex items-center justify-center'>
            1
          </span>
          <h2 className='text-body-2 font-medium text-white'>
            Best Value Bundle Deal
          </h2>
        </div>

        <div className='py-1.5 px-2 rounded-2xl flex items-center gap-1 bg-success-ufo-green-200 ml-auto'>
          <img src='/svg/Trophy.svg' alt='badge' width={12} height={12} />
          <p className='text-jakarta-8'>Proven Winners</p>
        </div>
      </div>
      <Divider className='mt-1' />
      <div className='p-3 max-w-[89%] w-full'>
        <p className='text-caption-1 font-regular text-text-light-silver'>
          Position your mattress bundle as the smartest choice — combining
          comfort, savings, and convenience in one offer. Make it easy for
          customers to get everything they need in a single purchase.
        </p>
        <div className='mb-3 flex items-center justify-start mt-3 gap-2'>
          <RecommendationsCardButton text='Bundle Offer' />
          <RecommendationsCardButton text='Value Pack' />
          <RecommendationsCardButton text='Smart Choice' />
        </div>
      </div>

      {/* cards and controls container */}
      <div className='p-3 gap-2 w-full grid grid-cols-1 md:grid-cols-2'>
        <CarouselCard
          logo='/svg/Nectar.svg'
          title='Nectar'
          badgeText='Proven Winners'
          badgeBg='bg-success-ufo-green-200'
          badgeIcon='/svg/Trophy.svg'
          img='/card-image.png'
          url='www.nectarsleep.com'
          headline='Start Your 365 Night Trial'
          buttonText='Shop Now'
        />
        <CarouselCard
          logo='/svg/Nectar.svg'
          title='Nectar'
          badgeText='Proven Winners'
          badgeBg='bg-success-ufo-green-200'
          badgeIcon='/svg/Trophy.svg'
          img='/card-image.png'
          url='www.nectarsleep.com'
          headline='Start Your 365 Night Trial'
          buttonText='Shop Now'
        />
      </div>

      {/* Navigation and pagination container */}
      <div className='flex items-center justify-between mt-3 p-3'>
        {/* Static pagination dots */}
        <div className='rounded-full p-3 bg-secondary-white-800 flex items-center justify-center gap-5'>
          <div className='w-2 h-2 rounded-full bg-white' />
          <div className='w-2 h-2 rounded-full bg-white' />
          <div className='w-2 h-2 rounded-full bg-white' />
        </div>

        {/* Static navigation buttons */}
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-secondary-white-800 rounded-[100px] hover:bg-white text-white hover:text-black p-2 cursor-pointer'>
            <LucideChevronLeft width={16} height={16} />
          </button>
          <button className='bg-secondary-white-800 rounded-[100px] hover:bg-white text-white hover:text-black p-2 cursor-pointer'>
            <LucideChevronRight width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
