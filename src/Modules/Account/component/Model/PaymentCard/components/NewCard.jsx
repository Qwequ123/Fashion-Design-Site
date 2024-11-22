import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NewCard = ({ onClose }) => {
  const cardImage = [
    {
      src: "/images/Visa_Logo.png",
      alt: "Visacard",
    },
    {
      src: "/images/MasterCard_Logo.png",
      alt: "Mastercard",
    },
    {
      src: "/images/PayPal_Logo.png",
      alt: "Paypal",
    },
  ];

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [CVC, setCVC] = useState("");
  const [isPending, setisPending] = useState(false);
  const histroy = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = { cardName, cardNumber, expiryDate, CVC };
    setisPending(true);

    setTimeout(() => {
      fetch("http://localhost:5000/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(card),
      }).then(() => {
        setisPending(false);
        onClose();
        histroy("/account");
      });
    }, 1000);
  };

  return (
    <div className=" flex justify-center rounded-md bg-white items-center my-10">
      <div className="flex flex-col gap-6 w-fit shadow-lg py-5 px-5">
        <div>
          <MdKeyboardArrowLeft
            onClick={onClose}
            size={20}
            className=" hover:bg-zinc-400 hover:text-white rounded-full cursor-pointer transition-all"
          />
          <span className="font-bold text-2xl">Add new card</span>
          <div className=" flex gap-3">
            {cardImage.map((items) => (
              <img
                key={items.src}
                src={items.src}
                className="max-w-[50px] text-xs italic object-contain"
                alt={items.alt}
              />
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="card_number">
            Card Number
          </label>
          <input
            className="bg-zinc-100 rounded-md px-2 py-2"
            autocomplete="nope"
            type="text"
            required
            onChange={(e) => setCardNumber(e.target.value)}
            value={cardNumber}
            id="card_number"
            placeholder="0000 0000 0000 0000"
            maxLength={16}
          />
          <label className="font-semibold" htmlFor="card_name">
            Card Name
          </label>
          <input
            className="bg-zinc-100 rounded-md px-2 py-2"
            onChange={(e) => setCardName(e.target.value)}
            required
            value={cardName}
            type="text"
            id="card_name"
            maxLength={20}
            placeholder="Andrew Addai"
          />
          <div className="flex justify-between gap-4 items-center">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="expiry_date">
                Expiration Date
              </label>
              <input
                className="bg-zinc-100 rounded-md px-2 py-3"
                onChange={(e) => setExpiryDate(e.target.value)}
                required
                value={expiryDate}
                type="month"
                name=""
                id="expiry_date"
                placeholder=""
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="CVC">
                CVC
              </label>
              <input
                className="bg-zinc-100 rounded-md px-2 py-3"
                onChange={(e) => setCVC(e.target.value)}
                required
                value={CVC}
                type="text"
                name=""
                maxLength={3}
                id="CVC"
                placeholder=""
              />
            </div>
          </div>
          {isPending && (
            <button className="mt-10 flex justify-center items-center bg-yellow-800 rounded-md py-2 text-white font-bold">
              <LoadingButton />
            </button>
          )}
          {!isPending && (
            <button className="mt-10 bg-yellow-800 rounded-md py-2 text-white font-bold">
              Add
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

const LoadingButton = () => {
  return (
    <div
      aria-label="Loading..."
      role="status"
      className="flex items-center space-x-2"
    >
      <svg className="h-6 w-6 animate-spin stroke-white" viewBox="0 0 256 256">
        <line
          x1="128"
          y1="32"
          x2="128"
          y2="64"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="195.9"
          y1="60.1"
          x2="173.3"
          y2="82.7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="224"
          y1="128"
          x2="192"
          y2="128"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="195.9"
          y1="195.9"
          x2="173.3"
          y2="173.3"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="128"
          y1="224"
          x2="128"
          y2="192"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="60.1"
          y1="195.9"
          x2="82.7"
          y2="173.3"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="32"
          y1="128"
          x2="64"
          y2="128"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="60.1"
          y1="60.1"
          x2="82.7"
          y2="82.7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
      </svg>
      <span className="font-bold ">Loading...</span>
    </div>
  );
};

export default NewCard;
