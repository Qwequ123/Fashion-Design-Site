import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';

const HeroDropDown = () => {
    return (
    <section className='flex gap-2'>
        <div className="">
            <div className="dropdown inline-block relative">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Dropdown</span>
                <IoIosArrowUp />
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                    <Link
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    to="#"
                    >
                    Onesd
                    </Link>
                </li>
                </ul>
            </div>
        </div>

        <div className="">
            <div className="dropdown inline-block relative">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Designers</span>
                <IoIosArrowUp />
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                    <Link
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    to="#"
                    >
                    Onesd
                    </Link>
                </li>
                </ul>
            </div>
        </div>

        <div className="">
            <div className="dropdown inline-block relative">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Sizes</span>
                <IoIosArrowUp />
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                    <Link
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    to="#"
                    >
                    Onesd
                    </Link>
                </li>
                </ul>
            </div>
        </div>

        <div className="">
            <div className="dropdown inline-block relative">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Colors</span>
                <IoIosArrowUp />
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                    <Link
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    to="#"
                    >
                    Onesd
                    </Link>
                </li>
                </ul>
            </div>
        </div>
    </section>
    );
}

export default HeroDropDown     