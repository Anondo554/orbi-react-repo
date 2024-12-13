import React from "react";
import Badge from "./Badge";
import Image from "../Image";
import Bilai from "../../assets/bilai.png";
import Heading from "../Heading";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
function Product() {
  return (
    <div className="w-[24%] relative group ">
      <Image imgSrc={Bilai} imgAlt={Bilai} className={"w-full"} />
      <Badge badgeText={"new"} className={"absolute top-5 left-5 "} />
      <div className="flex justify-between pt-[30px]">
        <Heading
          text={"Basic Crew Neck Tee"}
          as={"h3"}
          className={"text-[20px] font-bold text-menuHcolor "}
        />
        <Heading
          text={"$15.00"}
          as={"p"}
          className={"text-[16px]  text-menuColor"}
        />
      </div>
      <div className="bg-teal-300 p-6 absolute bottom-14 left-0 w-full hidden group-hover:block ">
        <div className="flex justify-end gap-x-2 items-center hover:text-menuHcolor hover:text-[16px] hover:font-bold  ">
          <span> Add to Wish List</span>
          <FaHeart/>
        </div>
        <div className="flex justify-end gap-x-2 items-center hover:text-menuHcolor hover:text-[16px] hover:font-bold  ">
          <span>Compare</span>
          <LuRefreshCcw/>
        </div>
        <div className="flex justify-end gap-x-2 items-center hover:text-menuHcolor hover:text-[16px] hover:font-bold  ">
          <span> Add to Cart</span>
          <FaCartShopping/>
        </div>
      </div>
    </div>
  );
}

export default Product;
