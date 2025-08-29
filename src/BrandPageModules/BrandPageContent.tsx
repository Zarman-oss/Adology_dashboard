import { LucideAnnoyed } from 'lucide-react';

import PrimaryButton from '../components/ui/PrimaryButton';

export default function BrandPageContent() {
  return (
    <main className='bg-dashboard rounded-2xl pb-4 dashboard-container w-[80%] h-screen'>
      <div className='mx-auto gap-4 p-6 flex items-center justify-center flex-wrap sm:justify-start'>
        <PrimaryButton icon={<LucideAnnoyed />} text='Button' />
        <PrimaryButton icon={<LucideAnnoyed />} text='Button' />
        <PrimaryButton icon={<LucideAnnoyed />} text='Button' />
      </div>

      <div className='grid grid-cols-[200px_100px] justify-between max-w-6xl h-[300px]'>
        <div className='bg-blue-800'>Column 1</div>
        <div className='bg-yellow-200'>Column 2</div>
      </div>
    </main>
  );
}
