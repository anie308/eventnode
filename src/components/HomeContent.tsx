import teracards from "../assets/img/teralaptop.png";

function HomeContent() {
  return (
    <div className="flex flex-col items-center justify-center p-[20px]  lg:py-[40px]">
      <div className="flex flex-col items-center">
        <p className="text-white font-nunito text-[32px] lg:text-[64px] font-[800] leading-[40px] lg:leading-[72px] text-center">
          Create, Explore, and <br className="hidden lg:block" /> Elevate Your{" "}
          <span className="gradient-text">Events</span>
        </p>
        <p className="mt-[10px] text-white font-nunito text-center text-[14px] lg:text-[20px] leading-[20px] lg:leading-[32px]">
          Effortlessly create and manage your events, invite{" "}
          <br className="hidden lg:block" /> Attendees, and connect with
          like-minded individuals.
        </p>
        <button className="gradient-button text-white p-[10px_20px] mt-[20px] rounded-[10px]">
          Create Event
        </button>
      </div>
      <div className="mt-[30px] lg:mt-[50px] p-[20px]">
        <img src={teracards} className="h-[200px] lg:h-[400px]" alt="" />
      </div>
    </div>
  );
}

export default HomeContent;
