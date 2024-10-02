import { Link } from "react-router-dom";

function Footer() {
  const links = [
    {name: "Explore", path: "/explore"},
    {name: "Help/Support", path: "/help"},
    {name: "Contact", path: "/contact"},
    {name: "Privacy Policy", path: "/privacy-policy"},

  ]
  return (
    <div className="p-[20px] border-t botder-[#E1E1E1] relative z-20">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <Link
          to="/"
          className="gradient-text font-[800] text-[18px] lg:text-[24px]"
        >
          TeraEvents
        </Link>
        <div className="mt-[10px] lg:mt-0 space-x-[10px]">
          {links.map((link, index) => (
            <Link key={index} to={link.path} className="text-[#FFFFFF] font-nunito text-[16px] space-x-[5px]">
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className=" mt-[20px] flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="font-nunito text-white">
        @ 2024 TeraEvents. All rights reserved.
        </div>
        <div className="mt-[10px] lg:mt-0">loll</div>
      </div>
    </div>
  );
}

export default Footer;
