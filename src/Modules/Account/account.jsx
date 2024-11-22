import React from "react";
import { Link } from "react-router-dom";
import Edit from "./component/Edit";

const account = () => {
  return (
    <div>
      <p className="font-bold text-4xl pt-8 px-28">Your Account</p>

      {/* container */}

      <div className="bg-gray-100 m-9 rounded-xl pb-10">
        {/* profile picture and info container */}
        <div className=" border-2 flex gap-4 items-center pt-6 pb-4  px-6 lg:px-[70px]">
          {/* image upload */}
          <div className="border-2 rounded-full border-black w-[90px] p-8">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/fluency-systems-regular/48/guest-male.png"
              alt="guest-male"
            />
          </div>

          {/* line */}
          <div className="border-l-2 border-gray-300  h-[70px]">
            {" "}
            <hr />
          </div>

          {/* profile details */}

          <div className="flex ">
            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="">Name:</label>
                Theo Lencer
              </div>

              <div>
                <label htmlFor="">Email:</label>
                theolencer@gmail.com
              </div>

              <div>
                <label htmlFor="">Linked Moblie:</label>
                0542068078
              </div>
            </div>

            {/* Edit */}

            <div className="">
              <button className="text-blue-500">Edit</button>
            </div>
          </div>
        </div>

        {/* line 2 */}

        <hr className=" border-gray-400 p-3" />

        {/* cards */}

        {/* container */}
        <div className="flex justify-center items-center">
          <div className="p-4 md:grid gap-4 md:grid-cols-2 ">
            {/* Your Account */}
            <Edit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default account;
