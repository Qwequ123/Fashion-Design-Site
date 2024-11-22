import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { HiReceiptRefund } from "react-icons/hi2";

const images = [
  {
    src: "/images/shirt(2).jpg",
  },
  {
    src: "/images/shirt(3).jpg",
  },
  {
    src: "/images/shirt(4).jpg",
  },
  {
    src: "/images/shirt(5).jpg",
  },
];
const Product_Info = [
  {
    title: "Yibaoli hot sale moroccan kaftan muslim thobes for men kaftan",
    itemName: "Mr. Elly's Clothing",
    review: "98",
    price: "20",
    condition: "New",
    availability: "6",
    sold: "19",
    Material:
      "95%Polyester+5%Spandex Fabric has a little elastic, very soft, fabric breathable, great quality, cozy and defines your curve.",
    Feature:
      "The dress is simple and stylish. Ruffled flared sleeves, short sleeves, classic elegance. The round neck and zipper on the back make it easy to put on and take off. The length of the skirt just covers your knees and will not affect your various actions.",
    Occasion:
      "The stylish dress can be worn in all occasions that make you more feminine. Especially suit for casual, daily wear, office, business, wedding, formal, church, dating, party, cocktail, evening, club, work, holiday and other occasion.",
    Us_Size:
      "S=USA 4-6;M=8-10;L=12-14;XL=16-18;XXL=18-20. Please check it before you buy!",
    Match:
      "You can wear this dress with sneakers or high heel, necklace, brooch, bracelet, watch, fashion handbag and so on.This dress very versatile, You can add a coat when it's cold.",
  },
];

const listHoverStyle =
  "relative hover:text-zinc-500 after:absolute after:bg-black after:content-[' '] after:bottom-0 after:left-0 after:w-0 after:transition-all after:duration-700  hover:after:w-full after:h-[1px]";

const Product_Details = () => {
  return (
    <div>
      <div>
        {Product_Info.map((items) => (
          <div className=" mt-10 w-[80%]  m-auto ">
            <div className="mb-4">
              <span className=" w-[25%] flex font-bold text-lg">
                {items.title}
              </span>
            </div>
            <div className="grid-cols-2 gap-28 grid">
              {/* Image Selection Column */}
              <div>
                <div className="grid grid-cols-[auto,1fr] gap-6  overflow-hidden ">
                  <div className="flex flex-col gap-4">
                    {images.map((items) => (
                      <img
                        className=" hover:brightness-90 transition-all cursor-pointer rounded-md w-full max-h-[110px] object-cover object-center"
                        src={items.src}
                        alt=""
                      />
                    ))}
                  </div>
                  <div>
                    <img
                      className=" brightness-75 rounded-md  object-cover object-center"
                      src="/images/shirt(2).jpg"
                      alt=""
                    />
                  </div>
                </div>
                {/* Product_Details */}
                <div className="mt-8">
                  <h1 className="font-bold text-lg">Product details</h1>
                  <table className=" w-[100%] text-left">
                    <tr>
                      <tr>Fabric type:</tr>
                      <td>95% Polyester, 5% Spandex</td>
                    </tr>
                    <tr>
                      <tr>Origin:</tr>
                      <td>Import</td>
                    </tr>
                    <tr>
                      <tr>Closure type:</tr>
                      <td>Zipper</td>
                    </tr>
                    <tr>
                      <tr>Neck style:</tr>
                      <td>Round Neck</td>
                    </tr>
                  </table>
                </div>
                <hr className="my-10" />
                {/* Security */}
                <div className=" space-y-2">
                  <h1 className=" text-lg font-bold">
                    Protections for Product
                  </h1>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 justify-start">
                      <MdOutlineSecurity size={50} />
                      <span className="flex flex-col">
                        <span className=" font-bold text-lg">
                          Secure payments
                        </span>
                        <span className="">
                          Every payment you make on Fashion.com is secured with
                          strict SSL encryption and PCI DSS data protection
                          protocols
                        </span>
                        <span className="flex gap-6 mt-4">
                          <img
                            className="w-[80px] object-contain"
                            src="/images/Visa_Logo.png"
                            alt=""
                          />
                          <img
                            className="w-[80px] object-contain"
                            src="/images/MasterCard_Logo.png"
                            alt=""
                          />
                          <img
                            className="w-[100px] object-contain"
                            src="/images/PayPal_Logo.png"
                            alt=""
                          />
                        </span>
                      </span>
                    </div>
                    <div className="flex gap-4 justify-start">
                      <HiReceiptRefund size={40} />
                      <span className="flex flex-col">
                        <span className=" font-bold text-lg">
                          Refund policy
                        </span>
                        <span className="">
                          Claim a refund if your order doesn't ship, is missing,
                          or arrives with product issues
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Items Details Column */}
              <div className="flex flex-col gap-4">
                <span className="text-blue-600 break-words w-52 text-3xl font-black">
                  {items.itemName}
                </span>
                <span className=" border rounded-md w-fit pr-10 pl-4 py-1">
                  <ul className="list-disc flex gap-10">
                    <li className="list-none">{items.review}% positive</li>
                    <li className={`${listHoverStyle}`}>
                      <a href="">Other items from the seller</a>
                    </li>
                    <li className={`${listHoverStyle}`}>
                      <a href="">Contact Seller</a>
                    </li>
                  </ul>
                </span>
                <span className=" text-2xl font-bold">${items.price}</span>
                <span>
                  Condition:{" "}
                  <span className="font-bold">{items.condition}</span>
                </span>
                <span className="flex gap-4">
                  <form method="post" action="" className="flex gap-4">
                    <label htmlFor="Quantity">Quantity:</label>
                    <input
                      id="Quantity"
                      min={1}
                      type="number"
                      name="Quantity"
                      className=" border  rounded-md w-12"
                      defaultValue={1}
                    />
                  </form>
                  <span>
                    {items.availability} available / {items.sold}{" "}
                    <span className="font-bold">sold</span>
                  </span>
                </span>
                <div className="flex gap-14">
                  <button className=" min-w-fit bg-blue-600 rounded-md shadow-md text-white font-bold py-3 px-6  justify-center items-center flex">
                    <a href="">Buy it Now</a>
                  </button>
                  <button className=" border-black border rounded-md shadow-md  justify-center py-3 px-6 items-center flex">
                    Add to cart
                  </button>
                </div>
                <hr className="mt-12 mb-8 " />
                <div className="flex gap-4 flex-col">
                  <h3 className=" font-bold text-2xl">About this Item</h3>
                  <ul className="list-disc">
                    <li>
                      <span className="font-bold">Material:</span>
                      {items.Material}
                    </li>
                    <li>
                      <span className="font-bold">Feature:</span>
                      {items.Feature}
                    </li>
                    <li>
                      <span className="font-bold">Occasion:</span>
                      {items.Occasion}
                    </li>
                    <li>
                      <span className="font-bold">Us Size:</span>
                      {items.Us_Size}
                    </li>
                    <li>
                      <span className="font-bold">Match:</span>
                      {items.Match}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product_Details;
