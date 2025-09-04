import Carousel from '@/components/ui/Carousel';
import NavigationButton from '@/components/ui/NavigationButton';
import {
  LucideCalendar,
  LucideEye,
  LucideImage,
  LucideListFilter,
  LucideSearch,
  LucideX,
} from 'lucide-react';
import { useState } from 'react';
import CarouselCard from '../components/ui/CarouselCard';
import ProductCard from '../components/ui/ProductCard';

export default function Explore() {
  const [subTab, setSubTab] = useState('For You');

  return (
    <>
      {/* Tabs */}
      <div className='mx-auto p-6 flex items-center justify-center flex-wrap gap-4 sm:justify-start'>
        <NavigationButton
          text='For You'
          isActive={subTab === 'For You'}
          onClick={() => setSubTab('For You')}
        />
        <NavigationButton
          text='Ad Library'
          isActive={subTab === 'Ad Library'}
          onClick={() => setSubTab('Ad Library')}
        />
      </div>

      {/* Tab Content */}
      {subTab === 'For You' && (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto'>
            <ProductCard
              titleText='Top Performers'
              percentage='5,789%'
              percentageIcon='/svg/arrow-green.svg'
              campaignsCount='5,824'
              campaignsText='Fresh Campaigns from this Brand Group'
              brands={[
                {
                  logo: '/svg/Nectar-big.svg',
                  name: 'Nectar Sleep',
                  ads: '1,718 new ads',
                  badgeIcon: '/svg/incog-yellow.svg',
                  badgeText: 'Competitor',
                },
                {
                  logo: '/svg/Purple.svg',
                  name: 'Purple',
                  ads: '4,778 new ads',
                  badgeIcon: '/svg/incog-yellow.svg',
                  badgeText: 'Competitor',
                },
                {
                  logo: '/svg/Casper.svg',
                  name: 'Casper',
                  ads: '1,813 new ads',
                  badgeIcon: '/svg/heart.svg',
                  badgeText: 'Followed',
                },
              ]}
            />
            <ProductCard
              titleText='Top Performers'
              percentage='5,789%'
              percentageIcon='/svg/arrow-green.svg'
              campaignsCount='5,824'
              campaignsText='Fresh Campaigns from this Brand Group'
              brands={[
                {
                  logo: '/svg/Nectar-big.svg',
                  name: 'Nectar Sleep',
                  ads: '1,718 new ads',
                  badgeIcon: '/svg/incog-yellow.svg',
                  badgeText: 'Competitor',
                },
                {
                  logo: '/svg/Purple.svg',
                  name: 'Purple',
                  ads: '4,778 new ads',
                  badgeIcon: '/svg/incog-yellow.svg',
                  badgeText: 'Competitor',
                },
                {
                  logo: '/svg/Casper.svg',
                  name: 'Casper',
                  ads: '1,813 new ads',
                  badgeIcon: '/svg/heart.svg',
                  badgeText: 'Followed',
                },
              ]}
            />
            <ProductCard
              titleText='Top Performers'
              percentage='5,789%'
              percentageIcon='/svg/arrow-green.svg'
              campaignsCount='5,824'
              campaignsText='Fresh Campaigns from this Brand Group'
              brands={[
                {
                  logo: '/svg/Nectar-big.svg',
                  name: 'Nectar Sleep',
                  ads: '1,718 new ads',
                  badgeIcon: '/svg/incog-yellow.svg',
                  badgeText: 'Competitor',
                },
                {
                  logo: '/svg/Purple.svg',
                  name: 'Purple',
                  ads: '4,778 new ads',
                  badgeIcon: '/svg/incog-yellow.svg',
                  badgeText: 'Competitor',
                },
                {
                  logo: '/svg/Casper.svg',
                  name: 'Casper',
                  ads: '1,813 new ads',
                  badgeIcon: '/svg/heart.svg',
                  badgeText: 'Followed',
                },
              ]}
            />
          </div>
          {/* Carousels */}
          <Carousel titleText='Proven Winners' logo='/svg/Trophy-white.svg' />
          <Carousel titleText='Scaled Concepts' logo='/svg/scale-white.svg' />
          <Carousel titleText='New Ads' logo='/svg/Ads.svg' />
        </>
      )}

      {subTab === 'Ad Library' && (
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
