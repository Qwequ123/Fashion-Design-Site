import { FiTwitter } from "react-icons/fi";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import Flag from "react-world-flags";
import { Link } from "react-router-dom";
import { dynamic } from "../../../public/images";

const Footer = () => {
  return (
    <main className="h-auto flex mt-auto flex-col border ">
      <section className="w-full h-auto bg-black	flex p-3  justify-start items-start overflow-hidden footer-section gap-5">
        <section className="items-start h-auto flex ">
          <div className="p-5 h-auto">
            <header className="media-q-text tracking-wider">
              <figure className="w-full gap-3 items-center flex ">
                <span className="flex items-center gap-6">
                  <img
                    src={dynamic}
                    className="h-8 mr-[-1.25rem] rounded-full"
                    alt="Fashion Logo"
                  />
                  <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white uppercase text-white flex flex-col justify-start">
                    Fashion
                  </span>
                </span>
              </figure>
            </header>

            <div className="intro-foot-icons mt-3 flex gap-1">
              <div className="intro-foot-icons-twitter flex items-center">
                <span className="text-md text-white social_media_names pl-2">
                  <Link to="#">
                    <FiTwitter />
                  </Link>
                </span>
              </div>

              <div className="intro-foot-icons-linkedIn flex items-center">
                <span className="text-md text-white social_media_names pl-2">
                  <Link to="">
                    <AiOutlineFacebook />
                  </Link>
                </span>
              </div>

              <div className="intro-foot-icons-instagram flex items-center">
                <span className="text-md text-white social_media_names pl-2">
                  <Link to="#">
                    <FiInstagram />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="items-start h-auto flex">
          <div className="p-5 h-auto">
            <header className="media-q-text tracking-wider">
              <span className="text-white">Get to know us</span>
            </header>

            <ul name="footer" className="cursor-pointer mt-4">
              <li className="	flex items-center">
                <span className="text-sm pl-2	text-white hover:text-orange-500">
                  About us
                </span>
              </li>
              <li className="	flex items-center">
                <span className="text-sm pl-2	text-white hover:text-orange-500">
                  Career
                </span>
              </li>
              <li className="	flex items-center">
                <span className="text-sm pl-2	text-white hover:text-orange-500">
                  Fashion blog
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="items-start h-auto flex">
          <div className="p-5 h-auto">
            <header className="media-q-text tracking-wider">
              <span className="text-white">Sell on Fashion.com</span>
            </header>

            <ul name="footer" className="cursor-pointer mt-4">
              <li className="	flex items-center">
                <span className="text-sm pl-2	text-white hover:text-orange-500">
                  Start selling
                </span>
              </li>
              <li className="	flex items-center">
                <span className="text-sm pl-2	text-white hover:text-orange-500">
                  Seller Central
                </span>
              </li>
              <li className="	flex items-center">
                <span className="text-sm pl-2	text-white hover:text-orange-500">
                  Partnerships
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="items-start h-auto flex">
          <div className="p-5 h-auto">
            <header className="media-q-text tracking-wider">
              <span className="text-white">Get Support</span>
            </header>

            <ul name="footer" className="cursor-pointer mt-4">
              <li className="	flex items-center">
                <span className="text-sm pl-2	text-white hover:text-orange-500">
                  Help Center
                </span>
              </li>
              <li className="	flex items-center">
                <span className="text-sm pl-2	text-white hover:text-orange-500">
                  Your account
                </span>
              </li>
              <li className="	flex items-center">
                <span className="text-sm pl-2	text-white hover:text-orange-500">
                  Report abuse
                </span>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <hr className="" />

      <div className=" flex justify-between p-5 bg-black text-white ">
        <span className="mx-10">&copy; {new Date().getFullYear()} Fashion</span>
        <span className="mx-10">All rights reserved</span>
      </div>
    </main>
  );
};

export default Footer;
