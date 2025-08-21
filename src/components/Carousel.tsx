import PrimaryButton from '@/components/ui/PrimaryButton';

export default function Carousel() {
  return (
    <div className='flex items-center justify-between mt-6 '>
      <div className='flex '>
        <span className='bg-white rounded-[100px] px-[10px] flex items-center justify-center'>
          1
        </span>
        <p className='text-white'>
          Highlighting Product Benefits with Visual Proof
        </p>
      </div>
      <PrimaryButton text='View Details' />
    </div>
  );
}
