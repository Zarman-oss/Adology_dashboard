import { useState } from 'react';
import NavigationButton from '../components/ui/NavigationButton';
import RecommendationsCard from '../components/ui/RecommendationsCard';

export default function Recommendations() {
  const [subTab, setSubTab] = useState('Competitor Inspired');

  return (
    <>
      {/* Tabs */}
      <div className='mx-auto p-6 flex items-center justify-center flex-wrap gap-4 sm:justify-start'>
        <NavigationButton
          text='Competitor Inspired'
          isActive={subTab === 'Competitor Inspired'}
          onClick={() => setSubTab('Competitor Inspired')}
        />
        <NavigationButton
          text='White Space'
          isActive={subTab === 'White Space'}
          onClick={() => setSubTab('White Space')}
        />
        <NavigationButton
          text='Trend Inspired'
          isActive={subTab === 'Trend Inspired'}
          onClick={() => setSubTab('Trend Inspired')}
        />
      </div>

      {/* Tab Content */}
      {subTab === 'Competitor Inspired' && (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
          <RecommendationsCard />
          <RecommendationsCard />
          <RecommendationsCard />
          <RecommendationsCard />
        </div>
      )}

      {subTab === 'White Space' && (
        <div className='w-full mx-auto rounded-[12px] p-3 mt-6'>
          {/* Heading */}
          <h2 className='text-heading-2 font-medium text-white text-center'>
            We're about to launch
          </h2>
        </div>
      )}

      {subTab === 'Trend Inspired' && (
        <div className='w-full mx-auto rounded-[12px] p-3 mt-6'>
          <h2 className='text-heading-2 font-medium text-white text-center'>
            Trend Inspired Content Coming Soon
          </h2>
        </div>
      )}
    </>
  );
}
