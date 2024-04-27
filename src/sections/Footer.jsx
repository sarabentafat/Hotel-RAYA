import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

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
          {/* Tous les éléments du footer */}
          <div className="flex  my-4  justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* Partie du logo */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <div className="font-bold text-3xl">
                <img src={logo} alt="" className="w-10" />
              </div>
              <p className="text-[15px] font-medium text-[#646464]">
                Hôtel Raya - Meilleur hôtel <br />
                Route Lotissement n°1, Tichy, Bejaia, Algérie <br />
                +213 (0) 34 815 249
              </p>
              {/* Réseaux sociaux */}
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
                Politique de confidentialité | © {new Date().getFullYear()}{" "}
                Hôtel Raya <br />
              </p>
            </div>

            {/* Section centrale */}
            <div className="flex gap-3 ">
              <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] font-bold footer-main">
                  À propos de nous
                </p>

                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#BB6C2C]"></span>

                <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Services
                </p>
                <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Événements
                </p>
                <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Galerie
                </p>
              </div>

              {/* Section de droite */}
              <div className="flex flex-col gap-10 relative">
                <p className="text-[22px] font-bold footer-main">Contact</p>

                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#BB6C2C]"></span>

                <Link to='/reservation'>
                  {" "}
                  <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                    Réserver une chambre
                  </p>
                </Link>
                <Link to='/contact' className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Contactez-nous
                </Link>
                <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                  FAQ
                </p>
              </div>
            </div>
            {/* Section centrale */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
