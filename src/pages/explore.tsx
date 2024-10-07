import EventCategoriesCard from "../components/EventCategoriesCard"
import FeaturedEventCard from "../components/FeaturedEventsCard"
import Public from "../layout/public"

function Explore() {
  return (
   <Public>
     <div className="flex items-center justify-center">
      <div className="w-full lg:w-[80%]  p-[40px_20px]">
        <p className="font-[600] font-nunito text-white text-[32px]">Explore</p>

        <p className="text-[20px] text-white font-nunito">Event Categories</p>
        <p className="text-[14px] text-white font-nunito">Browse events by category to find the perfect experience that matches your interests.</p>
        <div className="grid  lg:grid-cols-4 gap-[20px] mt-[20px]">
          <EventCategoriesCard title="Workshops"/>
          <EventCategoriesCard title="Conferences"/>
          <EventCategoriesCard title="Seminars"/>
          <EventCategoriesCard title="Concerts"/>
        </div>

        <div className="mt-[50px] text-white">
        <p className="text-[20px] text-white font-nunito">Featured Events</p>
        <p className="text-[14px] text-white font-nunito">Check out the most anticipated events happening soon, curated just for you.</p>
        <div className="grid  lg:grid-cols-4 gap-[20px] mt-[20px]">
          <FeaturedEventCard title="Tech Innovators Summit 2024"/>
          <FeaturedEventCard title="Tech Innovators Summit 2024"/>
          <FeaturedEventCard title="Tech Innovators Summit 2024"/>
          <FeaturedEventCard title="Tech Innovators Summit 2024"/>
          
          
        </div>

        </div>
      </div>
    </div>
   </Public>
  )
}

export default Explore