type NavigationButtonProps = {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
};

export default function NavigationButton({
  text,
  isActive = false,
  onClick,
}: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        cursor-pointer relative px-6 py-4 transition-colors
        ${
          isActive
            ? 'text-white font-semibold'
            : 'text-gray-400 hover:text-white'
        }
      `}
    >
      <h2 className='text-body-2'>{text}</h2>

      {/* underline indicator */}
      {isActive && (
        <span className='absolute bottom-0 top-15 left-1/2 -translate-x-1/2 w-full  h-[2px] bg-secondary-white-50 rounded-full' />
      )}
    </button>
  );
}
