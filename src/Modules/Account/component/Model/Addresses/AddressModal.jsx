import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TbSearch } from "react-icons/tb";
import Added_Address from "./Added_Address";

const AddressModal = ({ onClose }) => {
  return (
    <div>
      {" "}
      <div className="min-w-[350px] w-[500px] gap-6 text-sm  min-h-fit rounded-lg flex py-4 px-4 flex-col bg-white">
        <div className="flex mb-2 items-center gap-4">
          <MdKeyboardArrowLeft
            onClick={onClose}
            size={20}
            className=" hover:bg-zinc-400 hover:text-white rounded-full cursor-pointer transition-all"
          />
          <span className="font-bold text-lg">Address</span>
        </div>
        <div className="grid text-xs grid-cols-2 gap-4">
          <button className="py-2 transition-shadow hover:shadow-zinc-400 shadow-md rounded-lg ">
            Shipping address
          </button>
          <button className="py-2 transition-shadow hover:shadow-zinc-400 hover:shadow-md rounded-lg">
            Billing address
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex w-[60%] gap-2 items-center">
            <TbSearch className=" cursor-pointer text-zinc-400" />
            <input
              className=" outline-none w-full "
              type="search"
              placeholder="Search the address here"
            />
          </div>
          <button className="after:absolute after:content-[' '] after:bg-yellow-800 after:w-[0] after:rounded-md  after:h-full after:top-0 after:left-0 after:z-10 after:transition-all after:duration-700 hover:after:w-full hover:text-white transition-colors duration-700 relative border-2 py-2 px-4 rounded-lg text-yellow-800 font-bold border-yellow-800">
            <span className=" relative z-20"> Add address</span>
          </button>
        </div>
        <span className="font-bold">Address list</span>
        <div className=" gap-4 grid">
          <Added_Address />
        </div>

        <div className=" mt-auto flex gap-4">
          <button
            onClick={onClose}
            className=" ml-auto py-2 transition-shadow px-4 hover:shadow-zinc-400 shadow-md rounded-lg "
          >
            Cancel
          </button>
          <button className=" bg-yellow-800 hover:shadow-lg transition-shadow  text-white rounded-lg px-2 py-2">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
