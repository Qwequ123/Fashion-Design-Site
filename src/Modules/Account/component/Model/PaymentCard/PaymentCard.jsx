import React, { useState } from "react";
import EmptyItem from "./components/EmptyItem";
import { FiPlus } from "react-icons/fi";

import Card from "./components/Card";
import useFetch from "./components/useFetch";
import Loading from "../../../../components/Loading";
import NewCard from "./components/NewCard";

const PaymentCard = () => {
  const [newCard, setNewCard] = useState(false);
  const {
    data: cards,
    isPending,
    error,
  } = useFetch("http://localhost:5000/cards");

  return (
    <>
      {!newCard && (
        <div>
          <div className=" min-h-[80vh]  justify-center items-center grid ">
            <div className=" grid  py-8 shadow-lg bg-white px-6 rounded-sm gap-6">
              <div className="grid ">
                <span className=" font-bold">Payment method</span>
                <span className="text-xs text-zinc-500">
                  Choose the card you want to use for payment
                </span>
              </div>
              {error && <div>{error}</div>}
              {isPending && <Loading />}
              {!isPending && (
                <div>{cards && <Card Card={cards} Title="All Cards" />}</div>
              )}

              <div className="flex w-fit cursor-pointer items-center text-yellow-800 font-bold">
                <FiPlus size={15} />
                <span onClick={() => setNewCard(true)}>Add new card</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {newCard && <NewCard onClose={() => setNewCard(false)} />}
    </>
  );
};

export default PaymentCard;
