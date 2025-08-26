import { ReactNode } from 'react';

type SecondaryButtonProps = {
  text: string;
  icon?: ReactNode;
  imgSrc?: string;
  onClick?: () => void;
  className?: string;
};

export default function SecondaryButton({
  text,
  icon,
  imgSrc,
  onClick,
  className = '',
}: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3
        rounded-full text-body-2 font-medium cursor-pointer
        hover:bg-white hover:text-black flex items-center gap-2
        transition-colors duration-200 ${className}`}
    >
      {/* If icon is provided */}
      {icon && (
        <span className='w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center'>
          {icon}
        </span>
      )}

      {/* Text + optional img */}
      <div className='flex items-center gap-2'>
        {imgSrc && (
          <img
            src={imgSrc}
            alt={text}
            className='w-4 h-4 sm:w-6 sm:h-6 object-contain'
          />
        )}
        <span>{text}</span>
      </div>
    </button>
  );
}
