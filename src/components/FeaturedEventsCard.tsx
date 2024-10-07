
type FeaturedProps = {
    title: string;
  }
  
  function FeaturedEventCard({title}: FeaturedProps) {
    return (
      <button className=" border-white bg-[#FFFFFF1A]   rounded-[10px]  p-[10px] ">
        <div className="flex items-center space-x-[10px] justify-start flex-row">
        <div className="h-[80px] min-w-[80px] bg-white rounded-[10px]"></div>
        <div className="flex flex-col items-start">
          <p className="text-white text-[16px] text-start leading-[18px]  font-[600]">{title}</p>
          <p className="text-[10px] text-white text-start leading-[16px]">Join professionals and enthusiasts</p>
        </div>
        </div>
        <button className="py-[4px] text-[14px] rounded-[5px] mt-[15px] border w-full border-white">
            Register
        </button>
      </button>
    );
  }
  
  export default FeaturedEventCard;
  