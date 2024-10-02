import { Link } from "react-router-dom";
import { CiShare1 } from "react-icons/ci";


function Navbar() {
  return (
    <div className="flex items-center z-20 relative border-b border-[#FFFFFF4D] justify-between p-[20px]">
      <Link
        to="/"
        className="gradient-text font-[800] text-[18px] lg:text-[24px]"
      >
        TeraEvents
      </Link>
      <Link to="/explore" className="flex items-center text-[#FFFFFF] border-b text-[16px] space-x-[5px]">
       <span> Explore</span>{" "}
        <CiShare1 />
      </Link>
      <div>
        <button className="gradient-button p-[6px_15px] lg:p-[6px_20px] rounded-[5px] text-white">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Navbar;
