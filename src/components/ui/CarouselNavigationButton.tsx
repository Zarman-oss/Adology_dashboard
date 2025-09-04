import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CarouselNavigationButton({ swiperRef }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (swiperInstance) {
      // Calculate the total number of pages based on the visible slides
      const updatePages = (swiper) => {
        setTotalPages(swiper.snapGrid.length);
        setActiveSlide(swiper.realIndex);
      };

      // Set initial values
      updatePages(swiperInstance);

      // Update state on slide change
      swiperInstance.on('slideChange', (swiper) => {
        setActiveSlide(swiper.realIndex);
      });

      // Also update when the Swiper updates (e.g., on resize)
      swiperInstance.on('update', updatePages);

      return () => {
        // Cleanup the event listeners when the component unmounts
        swiperInstance.off('slideChange', updatePages);
        swiperInstance.off('update', updatePages);
      };
    }
  }, [swiperRef]);

  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className='flex items-center justify-between mt-3'>
      {/* Dynamic pagination controlled by activeSlide state */}
      <div className='rounded-full p-3 bg-secondary-white-900 flex items-center justify-center gap-5'>
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              activeSlide === index ? 'bg-white' : 'bg-secondary-white-800'
            }`}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideTo(index);
              }
            }}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className='flex items-center justify-center gap-2'>
        <button
          className='bg-secondary-white-900 rounded-[100px] hover:bg-white text-white hover:text-black p-2 cursor-pointer'
          onClick={goToPrev}
        >
          <LucideChevronLeft width={16} height={16} />
        </button>
        <button
          className='bg-secondary-white-900 rounded-[100px] hover:bg-white text-white hover:text-black p-2 cursor-pointer'
          onClick={goToNext}
        >
          <LucideChevronRight width={16} height={16} />
        </button>
      </div>
    </div>
  );
}
