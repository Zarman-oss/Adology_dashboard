import Divider from '@/components/ui/Divider';
import NavigationButton from '@/components/ui/NavigationButton';
import {
  LucideChartColumnIncreasing,
  LucideSave,
  LucideSearch,
  LucideThumbsUp,
} from 'lucide-react';
import { useState } from 'react';
import Carousel from './Carousel';
import ProgressBar from './ProgressBar';
import PrimaryButton from './ui/PrimaryButton';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Competitor Trends');

  return (
    <main className='dashboard-container bg-dashboard rounded-2xl flex-1 p-4'>
      {/* Top buttons */}
      <div className='mx-auto gap-4 p-6 flex items-center justify-center flex-wrap sm:justify-start'>
        <PrimaryButton icon={<LucideSearch />} text='Explore' />
        <PrimaryButton icon={<LucideChartColumnIncreasing />} text='Trends' />
        <PrimaryButton icon={<LucideThumbsUp />} text='Recommendations' />
        <PrimaryButton icon={<LucideSave />} text='Saved Ads' />
      </div>

      <Divider />

      {/* Navigation buttons */}
      <div className='mx-auto p-6 flex items-center justify-center flex-wrap gap-4 sm:justify-start'>
        <NavigationButton
          text='Competitor Trends'
          isActive={activeTab === 'Competitor Trends'}
          onClick={() => setActiveTab('Competitor Trends')}
        />
        <NavigationButton
          text='Category Trends'
          isActive={activeTab === 'Category Trends'}
          onClick={() => setActiveTab('Category Trends')}
        />
      </div>

      {/* Chart */}
      {/* right now its just an image */}
      <img src='/svg/Chart.svg' className='mx-auto' />

      {/* Top Trends */}
      <div className='max-w-6xl mx-auto rounded-[12px] bg-secondary-white-800 p-3 mt-6'>
        <div className='flex gap-1 items-center justify-start w-full mb-4 '>
          <img src='/svg/top-trends.svg' />
          <h3 className='text-white text-caption-1 font-medium'>Top Trends</h3>
        </div>
        <Divider />
        {/* checkbox section */}
        <div className='max-h-48 overflow-y-auto'>
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
          <ProgressBar
            progress={213}
            label='Highlighting Product Benefits with Visual Proof'
            isChecked={true}
          />
        </div>
      </div>

      {/* Carousel */}
      <Carousel />
    </main>
  );
}
