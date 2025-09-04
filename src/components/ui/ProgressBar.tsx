import { useEffect, useState } from 'react';

export default function ProgressBars() {
  const [items, setItems] = useState(
    [...Array(10)].map((_, i) => ({
      id: i,
      progress: Math.floor(Math.random() * 101),
      checked: false,
      label: `Highlight Product Benefits with visual proof`,
    }))
  );

  const toggleCheckbox = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className='max-h-64 overflow-y-auto space-y-2'>
      {items.map((item) => {
        const [animatedProgress, setAnimatedProgress] = useState(0);

        useEffect(() => {
          const targetWidth = Math.min((item.progress / 100) * 100, 100);
          const timer = setTimeout(() => {
            setAnimatedProgress(targetWidth);
          }, 100);
          return () => clearTimeout(timer);
        }, [item.progress]);

        return (
          <div
            key={item.id}
            className='flex p-2 gap-3 items-center justify-between flex-wrap'
          >
            <div className='flex items-center gap-2'>
              <label
                htmlFor={`checkbox-${item.id}`}
                className='relative w-5 h-5 flex items-center justify-center cursor-pointer'
              >
                <input
                  id={`checkbox-${item.id}`}
                  type='checkbox'
                  checked={item.checked}
                  onChange={() => toggleCheckbox(item.id)}
                  className='peer absolute w-0 h-0 opacity-0'
                />
                <span
                  className={`
                    w-5 h-5 flex items-center justify-center rounded-md border
                    transition-colors duration-300
                    ${
                      item.checked
                        ? 'bg-yellow-400 border-yellow-400'
                        : 'bg-white border-gray-400'
                    }
                  `}
                >
                  <svg
                    className={`w-3 h-3 text-white transition-opacity duration-200 ${
                      item.checked ? 'opacity-100' : 'opacity-0'
                    }`}
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='3'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </span>
              </label>
              <span className='text-caption-1 font-medium text-white cursor-pointer'>
                {item.label}
              </span>
            </div>

            {/* Progress Bar */}
            <div className='flex items-center min-w-[220px]'>
              <span className='text-white text-caption-1 font-medium mr-2'>
                {item.progress}
              </span>
              <div className='h-2 flex-1 bg-gray-200 rounded-full overflow-hidden'>
                <div
                  className='h-full bg-yellow-400 transition-all duration-700 ease-out'
                  style={{ width: `${animatedProgress}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
