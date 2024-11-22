// import { Disclosure} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoCartOutline } from "react-icons/io5";
import { PiUserLight } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { dynamic } from "../../../public/images";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  console.log(props);
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const [input, setInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
    console.log("This is the " + input);
  };

  return (
    <>
      <nav
        name="nav"
        className="max-w-screen h-[55px] z-10 bg-white mb-auto  drop-shadow-md"
      >
        <div className="px- flex justify-between items-center w-full h-full">
          <div className="flex items-center mx-3">
            <Link href="" className="flex items-center">
              <span className="self-center whitespace-nowrap text-black flex justify-end items-center h-[7vh] gap-1">
                <IoLocationOutline size={24} />
                <div className="flex flex-col leading-tight	">
                  <small>Delivery to</small>
                  <span className="font-medium">Ghana</span>
                </div>
              </span>
            </Link>
          </div>

          <div>
            <img
              src={dynamic}
              alt="logo"
              width={35}
              height={35}
              className="rounded-full"
            />
          </div>

          <ul className="hidden font-medium sm:flex inset-0">
            <li>
              <span
                className="block py-2 pl-3 pr-4 text-black rounded dark:text-white  cursor-pointer"
                aria-current="page"
              >
                EN
              </span>
            </li>
            <li>
              <form>
                <span className="py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 cursor-pointer flex justify-center items-center border border-blue-500">
                  <FiSearch size={22} />
                  <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button type="submit" onClick={onSearchSubmit}></button>
                </span>
              </form>
            </li>
            <li>
              <span className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 cursor-pointer">
                <PiUserLight size={22} />
              </span>
            </li>
            <li>
              <span className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 cursor-pointer">
                <IoCartOutline size={22} />
              </span>
            </li>
          </ul>

          <div className="sm:hidden m-3" onClick={handleClick}>
            {!nav ? (
              <Bars3Icon className="w-8 text-black cursor-pointer" />
            ) : (
              <XMarkIcon className="w-8 text-black cursor-pointer" />
            )}
          </div>

          <ul
            className={
              !nav
                ? "hidden"
                : "absolute flex flex-col gap-2 bg-zinc-100 rounded-b-lg  w-full p-4 top-20"
            }
          >
            <li>
              <span
                className="block py-2 pl-3 pr-4 text-white  bg-orange-500  cursor-pointer rounded"
                aria-current="page"
              >
                Home
              </span>
            </li>
            <li>
              <span className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 hover:bg-white cursor-pointer rounded">
                About
              </span>
            </li>
            <li>
              <span className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 hover:bg-white cursor-pointer rounded">
                Products
              </span>
            </li>
            <li>
              <span className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500 hover:bg-white  cursor-pointer rounded">
                Services
              </span>
            </li>
            <li>
              <span className="block py-2 pl-3 pr-4 text-gray-900 hover:text-orange-500  hover:bg-white cursor-pointer rounded">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
