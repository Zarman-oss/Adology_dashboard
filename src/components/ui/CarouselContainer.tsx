import CarouselCard from './CarouselCard';

export default function CarouselContainer() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-4'>
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
    </div>
  );
}
