type SecondaryButtonProps = {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
};

export default function PrimaryButton({
  text,
  icon,
  onClick,
}: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className='px-4 py-3 hover:bg-white hover:text-black rounded-full text-text-light-silver text-body-2 flex items-center justify-center gap-2 font-medium bg-secondary-white-900 cursor-pointer'
    >
      {icon && (
        <span className='w-6 h-6 flex items-center justify-center'>{icon}</span>
      )}
      {text}
    </button>
  );
}
