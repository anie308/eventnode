import { useState } from "react";
import Public from "../layout/public";

function Signup() {
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    if (!email.trim()) {
      alert("All fields are required");
    } else {
      console.log({ email });
    }
  };
  return (
    <Public>
      <div className="w-full flex items-center justify-center p-[50px_20px]">
        <div className="w-full lg:w-[30%] bg-[#7FE78633] p-[20px] rounded-[15px] ">
          <p className="font-nunito text-[20px] lg:text-[35px] text-center text-white font-[600]">
            Signup to TeraEvents
          </p>
          <div className="mt-[20px] flex flex-col space-y-[20px]">
            <div>
              <input
                type="text"
                placeholder="Email"
                className=" px-[10px] h-[45px] border outline-none w-full rounded-[8px]"
                name=""
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              onClick={handleSignup}
              className="w-full gradient-button p-[10px] rounded-[10px]"
            >
              Continue with Email
            </button>
          </div>
        </div>
      </div>
    </Public>
  );
}

export default Signup;
