import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";


function Footer() {
 const iconsTab = [
   { icon: <FaFacebookF />, link: "https://www.facebook.com/Hotel.Raya/" },
   { icon: <AiOutlineTwitter />, link: "https://twitter.com/example" },
   { icon: <AiFillYoutube />, link: "https://www.youtube.com/example" },
   { icon: <BiLogoPinterestAlt />, link: "https://www.pinterest.com/example" },
 ];
  return (
    <>
      <footer className="bg-gray-100 w-full  my-4 py-5  ">
        <div className="md:mx-20 ">
          {/* Tous les éléments du footer */}
          <div className="flex  my-4  justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* Partie du logo */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <div className="font-bold text-3xl mx-auto md:mx-0">
                <img src={logo} alt="" className="w-10" />
              </div>
              <p className="text-[15px] font-medium text-[#646464]">
                Hôtel Raya - Meilleur hôtel <br />
                Route Lotissement n°1, Tichy, Bejaia, Algérie <br />
                +213 (0) 34 815 249
              </p>
              {/* Réseaux sociaux */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#BB6C2C] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Politique de confidentialité | © {new Date().getFullYear()}{" "}
                Hôtel Raya <br />
              </p>
            </div>

            {/* Section centrale */}
            <div className="md:flex gap-3  my-2">
              <div className="flex flex-col gap-8 relative">
                <p className=" font-bold text-lg">A propos de nous</p>

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
              <div className="flex flex-col gap-10 relative mt-8 md:mt-0 ">
                <p className=" font-bold text-lg">Contact</p>

                <Link to="/reservation">
                  {" "}
                  <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                    Réserver une chambre
                  </p>
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold"
                >
                  Contactez-nous
                </Link>
                <p className="text-[16px] hover:text-[#BB6C2C] cursor-pointer text-[#646464] font-medium hover:font-bold">
                  FAQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
