import React from "react";
import { Link } from "react-router-dom";
import { LiaUserCheckSolid } from "react-icons/lia";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const Designers_Details = () => {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-start">
        <div className="flex gap-2">
          <div>
            <img
              className=" w-12 aspect-square rounded-full object-cover object-center"
              src="/images/abcd.jpg"
              alt=""
            />
          </div>
          <div className="grid">
            <span className="font-bold">Adwoa Clothing</span>
            <span>Ghana</span>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <LiaUserCheckSolid size={20} />
          <Link className="font-bold">Contact Us</Link>
        </div>
      </div>
      <div className=" flex gap-2 items-center justify-center rounded-xl h-60 bg-slate-200">
        <IoIosArrowDropleftCircle size={30} className=" cursor-pointer" />
        <div className=" items-center  flex overflow-hidden gap-3  w-[80%] h-[80%]">
          {images.map((items) => (
            <img
              key={uuidv4()}
              className=" w-36 rounded-xl aspect-square object-cover"
              src={items.src}
              alt={items.alt}
            />
          ))}
        </div>
        <IoIosArrowDroprightCircle size={30} className=" cursor-pointer" />
      </div>
    </div>
  );
};

export default Designers_Details;

const images = [
  {
    src: "/images/abcd.jpg",
    alt: "abcd",
  },
  {
    src: "/images/babe.jpg",
    alt: "abcd",
  },
  {
    src: "/images/hall.jpg",
    alt: "abcd",
  },
  {
    src: "/images/globe.jpg",
    alt: "abcd",
  },
];
