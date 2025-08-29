import Explore from './Explore';
import Divider from '@/components/ui/Divider';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {
  LucideChartColumnIncreasing,
  LucideSave,
  LucideSearch,
  LucideThumbsUp,
} from 'lucide-react';
import { useState } from 'react';
import Recommendations from './Recommendations';
import SavedAds from './SavedAds';
import Trends from './Trends';

export default function InspirePageContent() {
  const [mainTab, setMainTab] = useState<
    'Explore' | 'Trends' | 'Recommendations' | 'Saved Ads'
  >('Trends');

  return (
    <main className='bg-dashboard rounded-2xl pb-4 dashboard-container w-[80%]'>
      {/* Top buttons (main tabs) */}
      <div className='mx-auto gap-4 p-6 flex items-center justify-center flex-wrap sm:justify-start'>
        <PrimaryButton
          icon={<LucideSearch />}
          text='Explore'
          onClick={() => setMainTab('Explore')}
          isActive={mainTab === 'Explore'}
        />
        <PrimaryButton
          icon={<LucideChartColumnIncreasing />}
          text='Trends'
          onClick={() => setMainTab('Trends')}
          isActive={mainTab === 'Trends'}
        />
        <PrimaryButton
          icon={<LucideThumbsUp />}
          text='Recommendations'
          onClick={() => setMainTab('Recommendations')}
          isActive={mainTab === 'Recommendations'}
        />
        <PrimaryButton
          icon={<LucideSave />}
          text='Saved Ads'
          onClick={() => setMainTab('Saved Ads')}
          isActive={mainTab === 'Saved Ads'}
        />
      </div>

      <Divider />

      {/* CONTENT BASED ON MAIN TAB */}
      {mainTab === 'Explore' && <Explore />}

      {mainTab === 'Trends' && <Trends />}

      {mainTab === 'Recommendations' && <Recommendations />}

      {mainTab === 'Saved Ads' && <SavedAds />}
    </main>
  );
}
