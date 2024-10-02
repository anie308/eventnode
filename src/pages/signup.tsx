import Public from "../layout/public";

function Signup() {
  return (
    <Public>
      <div className="w-full flex items-center justify-center p-[50px_20px]">
        <div className="w-full lg:w-[40%] bg-[#7FE78633] p-[20px] rounded-[15px] ">
          <p className="font-nunito text-[24px] lg:text-[48px] text-center text-white font-[600]">
            Signup to TeraEvents
          </p>
          <div className="mt-[10px] flex flex-col space-y-[20px]">
            <div>
                <input type="text" placeholder="Email" className=" px-[10px] h-[45px] border outline-none w-full rounded-[8px]" name="" id="" />
            </div>
            <button className="w-full gradient-button p-[10px] rounded-[10px]">Continue with Email</button>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio dolor
            obcaecati repellendus ipsa maxime quod vero facere nulla
            voluptatibus laboriosam at dolores ipsam omnis explicabo quisquam,
            aliquam consectetur! Possimus, eum!
          </div>
        </div>
      </div>
    </Public>
  );
}

export default Signup;
