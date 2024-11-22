import React from "react";
import { Link } from "react-router-dom";
import Designers_Details from "./Components/Designers_Details";

const Designer = () => {
  return (
    <>
      <div className=" grid gap-12">
        <div className=" relative z-10 overflow-hidden flex items-center justify-center h-[60svh] bg-yellow-800">
          <h1 className=" z-20 text-white font-bold text-4xl sg:text-6xl">
            DESIGNERS
          </h1>
          <span className=" bg-gradient-to-r opacity-40 from-black to-amber-900 z-10 absolute w-full h-full"></span>
          <img
            className=" bg-gradient-to-r from-cyan-500 to-blue-500  z-0 absolute w-full h-full object-cover object-top "
            src="/images/Designer.jpg"
            alt=""
          />
        </div>
        <div className=" w-[90%] m-auto grid gap-12">
          <div>
            <div className="flex gap-4  flex-col sg:flex-row sg:justify-between sg:items-center">
              <div className=" flex gap-4">
                <button className=" bg-yellow-950 text-white font-bold px-4 py-2 rounded-md">
                  <Link href="#">All Designers</Link>
                </button>
                <button className=" font-bold px-4 py-2 rounded-md">
                  <Link href="#">Following</Link>
                </button>
              </div>
              <button className=" w-fit font-bold bg-blue-500 text-white px-4 py-2 rounded-md">
                Filter
              </button>
            </div>
          </div>
          <div className=" grid gap-y-10 gap-x-[10vw]  sm:grid-cols-2">
            <Designers_Details />
            <Designers_Details />
            <Designers_Details />
            <Designers_Details />
            <Designers_Details />
            <Designers_Details />
            <Designers_Details />
            <Designers_Details />
          </div>
        </div>
      </div>
    </>
  );
};

export default Designer;
