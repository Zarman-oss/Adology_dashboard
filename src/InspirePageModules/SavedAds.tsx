import {
  LucideCalendar,
  LucideEye,
  LucideImage,
  LucideListFilter,
  LucidePlus,
  LucideSearch,
  LucideX,
} from 'lucide-react';
import { useState } from 'react';
import CarouselCard from '../components/ui/CarouselCard';
import NavigationButton from '../components/ui/NavigationButton';
import SavedAdsCard from '../components/ui/SavedAdsCard';

export default function SavedAds() {
  const [subTab, setSubTab] = useState('AdBoards');
  return (
    <>
      {/* Tabs */}
      <div className='mx-auto p-6 flex items-center justify-center flex-wrap gap-4 sm:justify-start'>
        <NavigationButton
          text='Ad Boards'
          isActive={subTab === 'AdBoards'}
          onClick={() => setSubTab('AdBoards')}
        />
        <NavigationButton
          text='All Saved Ads'
          isActive={subTab === 'AllSavedAds'}
          onClick={() => setSubTab('AllSavedAds')}
        />
      </div>

      {/* Tab Content */}
      {subTab === 'AdBoards' && (
        <>
          <div className='flex items-center justify-between flex-wrap mb-3 mt-3 md:mb-0'>
            <div className='bg-secondary-white-900 flex gap-1 rounded-full text-white py-3 px-4'>
              <LucideSearch className='cursor-pointer' />
              <input type='text' placeholder='Search...' />
            </div>
            {/* Folder button */}
            <div className='bg-white text-body-2 mt-3 md:mb-0 font-medium flex gap-1 rounded-full text-black py-3 px-4 transition-colors cursor-pointer hover:bg--secondary-white-900 '>
              <LucidePlus />
              Add Folder
            </div>
          </div>
          <div className='grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <SavedAdsCard
              folderName='Default Folder'
              adCount={34}
              lastUpdated='October 12, 2024'
              images={[
                './svg/card-img-small.svg',
                './svg/card-img-small-2.svg',
                './svg/card-img-small-3.svg',
              ]}
            />
            <SavedAdsCard
              folderName='Default Folder'
              adCount='34'
              lastUpdated='October 12, 2024'
              images={[
                './svg/card-img-small.svg',
                './svg/card-img-small-2.svg',
                './svg/card-img-small-3.svg',
              ]}
            />
            <SavedAdsCard
              folderName='Default Folder'
              adCount='34'
              lastUpdated='October 12, 2024'
              images={[
                './svg/card-img-small.svg',
                './svg/card-img-small-2.svg',
                './svg/card-img-small-3.svg',
              ]}
            />
            <SavedAdsCard
              folderName='Default Folder'
              adCount='34'
              lastUpdated='October 12, 2024'
              images={[
                './svg/card-img-small.svg',
                './svg/card-img-small-2.svg',
                './svg/card-img-small-3.svg',
              ]}
            />
            <SavedAdsCard
              folderName='Default Folder'
              adCount='34'
              lastUpdated='October 12, 2024'
              images={[
                './svg/card-img-small.svg',
                './svg/card-img-small-2.svg',
                './svg/card-img-small-3.svg',
              ]}
            />
            <SavedAdsCard
              folderName='Default Folder'
              adCount='34'
              lastUpdated='October 12, 2024'
              images={[
                './svg/card-img-small.svg',
                './svg/card-img-small-2.svg',
                './svg/card-img-small-3.svg',
              ]}
            />
            <SavedAdsCard
              folderName='Default Folder'
              adCount='34'
              lastUpdated='October 12, 2024'
              images={[
                './svg/card-img-small.svg',
                './svg/card-img-small-2.svg',
                './svg/card-img-small-3.svg',
              ]}
            />
            <SavedAdsCard
              folderName='Default Folder'
              adCount='34'
              lastUpdated='October 12, 2024'
              images={[
                './svg/card-img-small.svg',
                './svg/card-img-small-2.svg',
                './svg/card-img-small-3.svg',
              ]}
            />
            <SavedAdsCard
              folderName='Default Folder'
              adCount='34'
              lastUpdated='October 12, 2024'
              images={[
                './svg/card-img-small.svg',
                './svg/card-img-small-2.svg',
                './svg/card-img-small-3.svg',
              ]}
            />
          </div>
        </>
      )}

      {subTab === 'AllSavedAds' && (
        <div className='mx-auto'>
          <div className='flex items-center justify-between flex-wrap pb-6'>
            <div className='flex items-center gap-2 flex-wrap mb-3 mt-3 md:mb-0'>
              <div className='bg-secondary-white-900 flex gap-1 rounded-full text-white py-3 px-4'>
                <LucideSearch className='cursor-pointer' />
                <input type='text' placeholder='Search...' />
              </div>
              <div className='bg-secondary-white-900 text-body-2 font-medium flex gap-1 rounded-full text-white py-3 px-4 transition-colors cursor-pointer hover:bg-white hover:text-black'>
                <LucideListFilter />
                Add a Filter
              </div>
              <div className='bg-secondary-white-900 text-body-2 font-medium flex gap-1 rounded-full text-white py-3 px-4 cursor-pointer hover:bg-white hover:text-black transition-colors'>
                <LucideImage />
                Image
                <LucideX />
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-secondary-white-900 text-body-2 font-medium flex gap-1 rounded-full text-white py-3 px-4 cursor-pointer hover:bg-white hover:text-black transition-colors'>
                <LucideCalendar />
                All Time
              </div>
              <div className='bg-secondary-white-900 rounded-full text-white h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors'>
                <LucideEye />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
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
              logo='/svg/purple.svg'
              title='Purple'
              badgeText='Scaled Concepts'
              badgeBg='bg-warning-bright-yellow-200'
              badgeIcon='/svg/scale.svg'
              img='/card-image-2.png'
              url='www.purple.com'
              headline='Up to $600 Off'
              buttonText='Shop Now'
            />
            <CarouselCard
              logo='/svg/Casper.svg'
              title='Casper'
              badgeText='New Ads'
              badgeBg='bg-secondary-pistachio-blue-200'
              badgeIcon='/svg/Ads.svg'
              img='/card-image-3.png'
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
            <CarouselCard
              logo='/svg/purple.svg'
              title='Purple'
              badgeText='Scaled Concepts'
              badgeBg='bg-warning-bright-yellow-200'
              badgeIcon='/svg/scale.svg'
              img='/card-image-2.png'
              url='www.purple.com'
              headline='Up to $600 Off'
              buttonText='Shop Now'
            />
            <CarouselCard
              logo='/svg/Casper.svg'
              title='Casper'
              badgeText='New Ads'
              badgeBg='bg-secondary-pistachio-blue-200'
              badgeIcon='/svg/Ads.svg'
              img='/card-image-3.png'
              url='www.nectarsleep.com'
              headline='Start Your 365 Night Trial'
              buttonText='Shop Now'
            />
            <CarouselCard
              logo='/svg/Casper.svg'
              title='Casper'
              badgeText='New Ads'
              badgeBg='bg-secondary-pistachio-blue-200'
              badgeIcon='/svg/Ads.svg'
              img='/card-image-3.png'
              url='www.nectarsleep.com'
              headline='Start Your 365 Night Trial'
              buttonText='Shop Now'
            />
            <CarouselCard
              logo='/svg/purple.svg'
              title='Purple'
              badgeText='Scaled Concepts'
              badgeBg='bg-warning-bright-yellow-200'
              badgeIcon='/svg/scale.svg'
              img='/card-image-2.png'
              url='www.purple.com'
              headline='Up to $600 Off'
              buttonText='Shop Now'
            />
            <CarouselCard
              logo='/svg/purple.svg'
              title='Purple'
              badgeText='Scaled Concepts'
              badgeBg='bg-warning-bright-yellow-200'
              badgeIcon='/svg/scale.svg'
              img='/card-image-2.png'
              url='www.purple.com'
              headline='Up to $600 Off'
              buttonText='Shop Now'
            />
            <CarouselCard
              logo='/svg/Casper.svg'
              title='Casper'
              badgeText='New Ads'
              badgeBg='bg-secondary-pistachio-blue-200'
              badgeIcon='/svg/Ads.svg'
              img='/card-image-3.png'
              url='www.nectarsleep.com'
              headline='Start Your 365 Night Trial'
              buttonText='Shop Now'
            />
            <CarouselCard
              logo='/svg/Casper.svg'
              title='Casper'
              badgeText='New Ads'
              badgeBg='bg-secondary-pistachio-blue-200'
              badgeIcon='/svg/Ads.svg'
              img='/card-image-3.png'
              url='www.nectarsleep.com'
              headline='Start Your 365 Night Trial'
              buttonText='Shop Now'
            />
            <CarouselCard
              logo='/svg/purple.svg'
              title='Purple'
              badgeText='Scaled Concepts'
              badgeBg='bg-warning-bright-yellow-200'
              badgeIcon='/svg/scale.svg'
              img='/card-image-2.png'
              url='www.purple.com'
              headline='Up to $600 Off'
              buttonText='Shop Now'
            />
          </div>
        </div>
      )}
    </>
  );
}
