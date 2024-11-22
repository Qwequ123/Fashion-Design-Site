import React from "react";
import { useState } from "react";
import Modal from "./Model/Modal";

const editList = [
  {
    title: "Your Address",
    image: "https://img.icons8.com/nolan/64/order-delivered.png",
    alt: "order-delivered",
    subTitle: "Edit, remove or set default address",
    href: "Address",
  },
  {
    title: "Your Profile",
    image: "https://img.icons8.com/fluency/48/username--v1.png",
    alt: "username--v1",
    subTitle: "Manage, add or remove user profile",
    href: "Profile_Edit",
  },
  {
    title: "Payment",
    image: "https://img.icons8.com/color/48/online-payment-.png",
    alt: "online-payment-",
    subTitle: "Edit, remove or set default payment",
    href: "Payment_Edit",
  },
  {
    title: "Login and Security",
    image: "https://img.icons8.com/fluency/48/cyber-security.png",
    alt: "cyber-security",
    subTitle: "Edit login, name, and mobile number",
    href: "Security",
  },
];

const Edit = () => {
  const [showmodel, setShowModel] = useState(null);

  const handleItemClick = (item) => {
    setShowModel(item);
  };

  return (
    <>
      {editList.map((list) => (
        <a
          className=" cursor-pointer"
          key={list.href}
          onClick={() => handleItemClick(list.href)}
        >
          <div className=" hover:shadow-md hover:transition-shadow border-2 border-gray-300 rounded-xl p-6 flex  flex-col justify-center items-center pb-2 ">
            <div className="flex items-center justify-center">
              <img width="64" height="64" src={list.image} alt={list.alt} />
            </div>
            <div>
              <p className="text-xl font-bold flex justify-center">
                {list.title}
              </p>
              <span className="text-sm">{list.subTitle}</span>
            </div>
          </div>
        </a>
      ))}

      {showmodel && (
        <Modal itemSelected={showmodel} onClose={() => setShowModel(false)} />
      )}
    </>
  );
};

export default Edit;
