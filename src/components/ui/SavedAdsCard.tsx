import {
  LucideFolder,
  LucideStickyNote,
  LucideClock3,
  Ellipsis,
} from 'lucide-react';
import Divider from './Divider';

export default function SavedAdsCard({
  folderName = 'Default Folder',
  adCount = 0,
  lastUpdated = 'Not available',
  images = [],
}) {
  return (
    <div className='bg-secondary-white-900 rounded-xl'>
      {/* Card Header */}
      <div className='flex p-3 text-white items-center gap-2'>
        <LucideFolder />
        <h2 className='text-body-2 font-medium'>{folderName}</h2>
        <Ellipsis className='ml-auto' />
      </div>

      <Divider />

      {/* Card Body */}
      <div className='flex p-3 items-center gap-2'>
        <div className='flex items-center gap-1'>
          <LucideStickyNote
            width={16}
            height={16}
            className='text-secondary-white-600'
          />
          <h3 className='text-caption-2 font-regular  text-text-light-silver'>
            {adCount} Ads
          </h3>
        </div>

        <div className='flex items-center gap-1'>
          <LucideClock3
            width={16}
            height={16}
            className='text-secondary-white-600'
          />
          <p className='text-caption-2 font-regular text-text-light-silver'>
            Last update {lastUpdated}
          </p>
        </div>
      </div>

      {/* Photos */}
      <div className='p-3 flex items-center flex-wrap gap-1'>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Ad photo ${index + 1}`}
            className='object-contain'
          />
        ))}
      </div>
    </div>
  );
}
