import { ReactNode } from 'react';

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function PrimaryButton({
  text,
  icon,
  onClick,
  className = '',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3
        rounded-full flex items-center justify-center gap-2 font-medium cursor-pointer
        bg-secondary-white-900 text-text-light-silver text-body-2
        hover:bg-white hover:text-black transition-colors duration-200
        ${className}`}
    >
      {icon && (
        <span className='w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center'>
          {icon}
        </span>
      )}
      {text}
    </button>
  );
}
