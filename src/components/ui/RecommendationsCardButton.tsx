interface RecommendationsCardButtonProps {
  text: string;
}

export default function RecommendationsCardButton({
  text,
}: RecommendationsCardButtonProps) {
  return (
    <button className=' border card-border rounded-full card-border py-3 px-4  '>
      <p className='text-caption-2 font-regular text-white'>{text}</p>
    </button>
  );
}
