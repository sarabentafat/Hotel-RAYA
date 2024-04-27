import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="bg-gray-100 w-full  my-4 py-5  ">
        <div className="md:mx-20 ">
          {/* footer div all */}
          <div className="flex  my-4  justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <div className="font-bold text-3xl">logo</div>
              <p className="text-[15px] font-medium text-[#646464]">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#BB6C2C] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()}Hotel <br />
              </p>
            </div>

            {/* middle div */}
            <div className="flex gap-3 ">
              <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] font-bold footer-main">Abous Us</p>

                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#BB6C2C]"></span>

                <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Fitness Classes
                </p>
                <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Aerobics Classes
                </p>
                <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Power Yoga
                </p>
              </div>

              {/* right div */}
              <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] font-bold footer-main">Contact</p>

                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#BB6C2C]"></span>

                <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Fitness Classes
                </p>
                <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Aerobics Classes
                </p>
                <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Power Yoga
                </p>
              </div>
            </div>
            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
