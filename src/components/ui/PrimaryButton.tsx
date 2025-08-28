type PrimaryButtonProps = {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
};

export default function PrimaryButton({
  text,
  icon,
  onClick,
  isActive = false,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full px-4 cursor-pointer py-3 font-medium transition-colors
        ${
          isActive
            ? 'bg-white text-black'
            : 'bg-secondary-white-900 text-white hover:bg-white hover:text-black'
        }`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}
