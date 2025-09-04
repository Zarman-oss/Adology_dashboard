export default function Divider({ className = '' }) {
  return (
    <div className={`w-full h-[1px] bg-secondary-white-800 ${className}`} />
  );
}
