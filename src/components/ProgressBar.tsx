export default function ProgressBar({
  progress = 0,
  maxProgress = 100,
  label,
  isChecked = false,
  onCheckboxChange,
}) {
  const progressWidth = Math.min((progress / maxProgress) * 100, 100);

  return (
    <div className='flex p-2 gap-3 items-center justify-between'>
      <div className='flex items-center gap-2'>
        <input
          id='custom-checkbox'
          type='checkbox'
          checked={isChecked}
          onChange={onCheckboxChange}
          className='appearance-none w-5 h-5 border-1 rounded-md bg-white checked:bg-white checked:border-white focus:ring-2 focus:ring-white'
        />
        <p className='text-caption-1 font-medium text-white'>{label}</p>
      </div>
      <div className='flex items-center'>
        <span className='text-white text-caption-1 font-medium mr-2'>
          {progress}
        </span>
        <div className='h-2 w-48 bg-gray-200 rounded-full overflow-hidden'>
          <div
            className='h-full bg-warning-bright-yellow-300 transition-all duration-300'
            style={{ width: `${progressWidth}%` }}
          />
        </div>
      </div>
    </div>
  );
}
