export default function ProductCard({
  titleText,
  percentage,
  percentageIcon,
  campaignsCount,
  campaignsText,
  brands = [],
}) {
  return (
    <div className='bg-secondary-white-900 rounded-2xl mt-4'>
      {/* Top header */}
      <article className='flex items-center justify-between p-3'>
        <h2 className='text-white text-caption-1 font-medium'>{titleText}</h2>
        <span className='bg-white rounded-full flex px-1.5 gap-1 py-1'>
          <img src={percentageIcon} alt='arrow' />
          <p className='text-black text-jakarta-9'>{percentage}</p>
        </span>
      </article>

      <div className='bg-secondary-white-800 w-full h-[1px] mt-3'></div>

      {/* Campaigns Info */}
      <div className='p-3'>
        <p className='text-text-light-silver text-caption-2'>
          <span className='text-caption-2 text-white font-semibold'>
            {campaignsCount}
          </span>{' '}
          {campaignsText}
        </p>

        {/* Brands List */}
        {brands.map((brand, index) => (
          <div key={index} className='flex items-center justify-between mt-3'>
            {/* Left side: Logo + Info */}
            <div className='flex items-center gap-1'>
              <img src={brand.logo} alt={brand.name} />
              <div className='flex flex-col'>
                <h2 className='text-white font-medium text-caption-1'>
                  {brand.name}
                </h2>
                <p className='text-text-light-silver text-caption-2'>
                  {brand.ads}
                </p>
              </div>
            </div>

            {/* Right side: Badge */}
            <span className='bg-white px-2 py-1 rounded-full gap-1 flex'>
              <img src={brand.badgeIcon} alt='badge' />
              <p className='text-black text-jakarta-8'>{brand.badgeText}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
