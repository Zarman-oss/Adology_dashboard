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
  className,
}: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-full text-body-2 hover:bg-white hover:text-black w-full gap-2 font-medium cursor-pointer ${className}`}
    >
      {icon}
      <div className='flex gap-2 items-center justify-center'>
        {imgSrc && <img src={imgSrc} alt={text} className='w-6 h-6' />}
        {text}
      </div>
    </button>
  );
}
