
type EventCategoriesCardProps = {
  title: string;
}

function EventCategoriesCard({title}: EventCategoriesCardProps) {
  return (
    <button className=" border-white bg-[#FFFFFF1A]  flex items-center space-x-[10px] justify-start flex-row rounded-[10px]  p-[10px] ">
      <div className="h-[80px] min-w-[80px] bg-white rounded-[10px]"></div>
      <div className="flex flex-col items-start">
        <p className="text-white text-[18px] font-[600]">{title}</p>
        <p className="text-[12px] text-white text-start leading-[16px]">Join professionals and enthusiasts</p>
      </div>
    </button>
  );
}

export default EventCategoriesCard;
