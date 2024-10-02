import EventCategoriesCard from "../components/EventCategoriesCard"
import Public from "../layout/public"

function Explore() {
  return (
   <Public>
     <div className="flex items-center justify-center">
      <div className="w-full lg:w-[70%] border p-[40px_20px]">
        <p className="font-[600] font-nunito text-white text-[32px]">Explore</p>

        <p className="text-[20px] text-white font-nunito">Event Categories</p>
        <p className="text-[14px] text-white font-nunito">Browse events by category to find the perfect experience that matches your interests.</p>
        <div className="overflow-auto lg:overflow-hidden flex items-center lg:grid grid-cols-5 gap-[20px] mt-[20px]">
          <EventCategoriesCard/>
          <EventCategoriesCard/>
          <EventCategoriesCard/>
          <EventCategoriesCard/>
          <EventCategoriesCard/>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, non enim laudantium esse molestias ducimus autem praesentium est natus quod obcaecati, ea cupiditate. Dolores inventore repudiandae aliquid nihil beatae esse!
      </div>
    </div>
   </Public>
  )
}

export default Explore