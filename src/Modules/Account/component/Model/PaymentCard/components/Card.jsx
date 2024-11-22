import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import EmptyItem from "./EmptyItem";

const Card = ({ Card }) => {
  const [cards, setCards] = useState(Card);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/cards/${id}`, {
        method: "DELETE",
      });

      const updatedCards = cards.filter((card) => card.id !== id);
      setCards(updatedCards);
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
    <div className="flex h-fit flex-col gap-4">
      {cards.length === 0 ? (
        <EmptyItem />
      ) : (
        <div>
          {cards.map((items) => (
            <div
              className="flex gap-4 py-4 px-4 border w-[30vw] min-w-[250px]   rounded-md items-center"
              key={items.id}
            >
              <div>
                <img
                  className="max-w-[50px] border py-2 px-1 border-zinc-200 rounded-md"
                  src="/images/Visa_Logo.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between w-full items-start">
                <div className="flex flex-col gap-1 leading-3">
                  <span className=" font-semibold">
                    {"**** **** **** "}
                    {items.cardNumber.slice(-4)}
                  </span>
                  <span className=" text-zinc-500 text-sm">
                    Expire {items.expiryDate}/24
                  </span>
                  <div className="flex justify-between">
                    <MdDelete
                      onClick={() => handleDelete(items.id)}
                      className=" hover:text-zinc-500 hover:transition-all cursor-pointer"
                    />
                  </div>
                </div>
                <input
                  type="radio"
                  className=" cursor-pointer"
                  value={items.cardNumber}
                  name="paymentMethod"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
