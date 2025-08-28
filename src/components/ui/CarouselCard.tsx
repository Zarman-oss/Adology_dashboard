type CarouselCardProps = {
  logo: string;
  title: string;
  badgeText: string;
  badgeBg: string;
  badgeIcon: string;
  img: string;
  url: string;
  headline: string;
  buttonText: string;
};

export default function CarouselCard({
  logo,
  title,
  badgeText,
  badgeBg,
  badgeIcon,
  img,
  url,
  headline,
  buttonText,
}: CarouselCardProps) {
  return (
    <div className='bg-secondary-white-900 aspect-square rounded-2xl'>
      {/* Header */}
      <article className='flex flex-wrap justify-between items-center p-3 gap-2'>
        {/* Logo + Title */}
        <div className='flex items-center gap-2'>
          <img src={logo} alt={title} width={20} height={20} />
          <h4 className='text-white text-caption-1 font-medium'>{title}</h4>
        </div>

        {/* Badge */}
        <div
          className={`py-1.5 px-2 rounded-2xl flex items-center gap-1 ${badgeBg}`}
        >
          <img src={badgeIcon} alt='badge' width={12} height={12} />
          <p className='text-jakarta-8 '>{badgeText}</p>
        </div>
      </article>

      {/* Image */}
      <img src={img} alt={title} className='w-full object-contain' />

      {/* Footer */}
      <div className='p-3'>
        <div className='flex items-center flex-wrap justify-between'>
          <div className='flex flex-col'>
            <p className='text-text-light-silver text-jakarta-8'>{url}</p>
            <p className='text-white text-jakarta-9'>{headline}</p>
          </div>

          {/* Button */}
          <button className='bg-secondary-white-800 rounded-full py-1 px-3 text-white cursor-pointer hover:bg-white hover:text-black transition-colors duration-200'>
            <p className='text-jakarta-8 font-medium'>{buttonText}</p>
          </button>
        </div>

        {/* Save to inspiration */}
        <div className='bg-secondary-white-50 rounded-full px-4 py-2 w-full flex justify-between mt-3'>
          <img src='/svg/plus-sign.svg' alt='plus-sign' />
          <p className='font-medium text-body-sm'>Save to inspiration</p>
          <img src='/svg/arrow-down.svg' alt='arrow' />
        </div>
      </div>
    </div>
  );
}
