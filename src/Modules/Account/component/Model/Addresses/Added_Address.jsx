import React from "react";

const Added_Address = () => {
  return (
    <div>
      <div className="border min-h-[130px] grid grid-cols-[1fr,3fr]  gap-4 p-4  border-yellow-800 rounded-lg">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046755.8932582396!2d-1.0304069499999686!3d7.904465450000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd75acda8dad6c7%3A0x54d7f230d093d236!2sGhana!5e0!3m2!1sen!2sgh!4v1716036692743!5m2!1sen!2sgh"
            className=" rounded-lg object-contain"
            width={100}
            height={120}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="grid w-full">
          <div className="flex justify-between items-center">
            <button className=" text-xs py-1 px-2 rounded-lg font-bold text-white bg-yellow-800">
              Main house
            </button>
            <input className=" text-yellow-800" type="radio" name="i" />
          </div>
          <span className=" text-lg font-semibold">Emmanuel Acquah</span>
          <span className=" text-zinc-500">0203003211</span>
          <span className="text-zinc-500">Krofrom - Kumasi</span>
          <div className="flex text-xs gap-4 justify-around mt-10">
            <button className=" transition-shadow hover:shadow-zinc-400  shadow-md w-full py-2 rounded-lg font-bold">
              Edit address
            </button>
            <button className="w-full shadow-md transition-shadow hover:shadow-zinc-400 py-2 rounded-lg font-bold">
              Delete address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Added_Address;
