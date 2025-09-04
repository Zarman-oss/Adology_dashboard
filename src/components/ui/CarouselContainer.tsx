import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselCard from './CarouselCard';
import CarouselNavigationButton from './CarouselNavigationButton';

import 'swiper/css';

export default function CarouselContainer() {
  const swiperRef = useRef(null);
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const cards = [
    {
      logo: '/svg/Nectar.svg',
      title: 'Nectar',
      badgeText: 'Proven Winners',
      badgeBg: 'bg-success-ufo-green-200',
      badgeIcon: '/svg/Trophy.svg',
      img: '/card-image.png',
      url: 'www.nectarsleep.com',
      headline: 'Start Your 365 Night Trial',
      buttonText: 'Shop Now',
    },
    {
      logo: '/svg/purple.svg',
      title: 'Purple',
      badgeText: 'Scaled Concepts',
      badgeBg: 'bg-warning-bright-yellow-200',
      badgeIcon: '/svg/scale.svg',
      img: '/card-image-2.png',
      url: 'www.purple.com',
      headline: 'Up to $600 Off',
      buttonText: 'Shop Now',
    },
    {
      logo: '/svg/Nectar.svg',
      title: 'Nectar',
      badgeText: 'Proven Winners',
      badgeBg: 'bg-success-ufo-green-200',
      badgeIcon: '/svg/Trophy.svg',
      img: '/card-image.png',
      url: 'www.nectarsleep.com',
      headline: 'Start Your 365 Night Trial',
      buttonText: 'Shop Now',
    },
    {
      logo: '/svg/purple.svg',
      title: 'Purple',
      badgeText: 'Scaled Concepts',
      badgeBg: 'bg-warning-bright-yellow-200',
      badgeIcon: '/svg/scale.svg',
      img: '/card-image-2.png',
      url: 'www.purple.com',
      headline: 'Up to $600 Off',
      buttonText: 'Shop Now',
    },
    {
      logo: '/svg/purple.svg',
      title: 'Purple',
      badgeText: 'Scaled Concepts',
      badgeBg: 'bg-warning-bright-yellow-200',
      badgeIcon: '/svg/scale.svg',
      img: '/card-image-2.png',
      url: 'www.purple.com',
      headline: 'Up to $600 Off',
      buttonText: 'Shop Now',
    },
    {
      logo: '/svg/purple.svg',
      title: 'Purple',
      badgeText: 'Scaled Concepts',
      badgeBg: 'bg-warning-bright-yellow-200',
      badgeIcon: '/svg/scale.svg',
      img: '/card-image-2.png',
      url: 'www.purple.com',
      headline: 'Up to $600 Off',
      buttonText: 'Shop Now',
    },
    {
      logo: '/svg/purple.svg',
      title: 'Purple',
      badgeText: 'Scaled Concepts',
      badgeBg: 'bg-warning-bright-yellow-200',
      badgeIcon: '/svg/scale.svg',
      img: '/card-image-2.png',
      url: 'www.purple.com',
      headline: 'Up to $600 Off',
      buttonText: 'Shop Now',
    },
  ];

  return (
    <div className=' mt-4'>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSwiper={() => setSwiperLoaded(true)}
        modules={[]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <CarouselCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
      {swiperLoaded && <CarouselNavigationButton swiperRef={swiperRef} />}
    </div>
  );
}
