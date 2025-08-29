import Carousel from '@/components/ui/Carousel';
import Divider from '@/components/ui/Divider';
import NavigationButton from '@/components/ui/NavigationButton';
import ProgressBar from '@/components/ui/ProgressBar';
import { useState } from 'react';
import Chart from '../components/ui/Chart';

export default function Trends() {
  const [subTab, setSubTab] = useState('Competitor Trends');

  return (
    <>
      {/* Tabs */}
      <div className='mx-auto p-6 flex items-center justify-center flex-wrap gap-4 sm:justify-start'>
        <NavigationButton
          text='Competitor Trends'
          isActive={subTab === 'Competitor Trends'}
          onClick={() => setSubTab('Competitor Trends')}
        />
        <NavigationButton
          text='Category Trends'
          isActive={subTab === 'Category Trends'}
          onClick={() => setSubTab('Category Trends')}
        />
      </div>

      {/* Tab Content */}
      {subTab === 'Competitor Trends' && (
        <>
          {/* Chart */}

          <Chart />

          {/* Top Trends */}
          <div className='w-full mx-auto rounded-[12px] bg-secondary-white-800 p-3 mt-6'>
            <div className='flex gap-1 items-center justify-start w-full mb-4'>
              <img src='/svg/top-trends.svg' />
              <h3 className='text-white text-caption-1 font-medium'>
                Top Competitor Trends
              </h3>
            </div>
            <Divider />
            <div className='max-h-48 overflow-y-auto'>
              {[...Array(10)].map((_, i) => (
                <ProgressBar
                  key={i}
                  progress={213}
                  label={`Competitor Trend #${i + 1}`}
                  isChecked={true}
                />
              ))}
            </div>
          </div>

          {/* Carousels */}
          <Carousel
            carouselNumber={1}
            titleText='Highlighting Product Benefits with Visual Proof'
          />
          <Carousel
            carouselNumber={2}
            titleText='Highlighting Product Benefits with Visual Proof'
          />
        </>
      )}

      {subTab === 'Category Trends' && (
        <div className='flex flex-col items-center justify-center min-h-[70vh] gap-6'>
          {/* Heading */}
          <h2 className='text-heading-2 font-medium text-white text-center'>
            We're about to launch
          </h2>

          {/* Email input + button */}
          <div className='flex items-center rounded-full border border-white overflow-hidden'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              className='bg-transparent px-4 py-3 text-body-2 text-white placeholder-white outline-none'
            />
            <button className='bg-white transition-colors mr-2 px-5 py-3 rounded-full cursor-pointer'>
              <p className='text-body-2 font-medium text-black '>
                Get Notified
              </p>
            </button>
          </div>

          {/* Subtext */}
          <span className='text-body-2 font-regular text-white text-center'>
            No spam, only meaningful emails
          </span>
        </div>
      )}
    </>
  );
}
