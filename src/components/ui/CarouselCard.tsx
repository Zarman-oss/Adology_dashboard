export default function CarouselCard() {
  return (
    <div className='bg-secondary-white-900 aspect-square rounded-2xl'>
      <article className='flex items-center p-3'>
        <img src='/svg/Nectar.svg' alt='logo' />
        <h4 className='text-white text-caption-1 font-medium'>Nectar</h4>

        <div className='ml-auto py-1.5 px-2 bg-success-ufo-green-200 rounded-2xl flex items-center gap-1'>
          <img src='/svg/Trophy.svg' alt='logo' />
          <p className='plus-jakarta-sans text-[8px]'>Proven Winners</p>
        </div>
      </article>
      {/* Image */}
      <img
        src='/card-image.png'
        alt='image'
        className='w-full object-contain"'
      />

      {/* end section of card */}
      <div className='p-3'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col '>
            <p className='text-text-light-silver font-plus-jakarta text-[8px] font-regular '>
              www.nectarsleep.com
            </p>
            <p className='text-white text-[11px]'>Start Your 365 Night Trial</p>
          </div>
          {/* Button */}
          <button className='bg-secondary-white-800 text-[3px] text-white rounded-full py-1 px-1 cursor-pointer hover:bg-white hover:text-black  '>
            Shop Now
          </button>
        </div>
        {/* save to inspiration button */}

        <div className='bg-secondary-white-50 rounded-full font-medium px-4 py-2 w-full flex justify-between mt-3'>
          <img src='/svg/plus-sign.svg' alt='plus-sign' />
          Save to inspiration
          <img src='/svg/arrow-down.svg' alt='plus-sign' />
        </div>
      </div>
    </div>
  );
}
