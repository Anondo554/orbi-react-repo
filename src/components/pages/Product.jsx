import React from "react";
import Badge from "./Badge";
import Image from "../Image";
import Bilai from "../../assets/bilai.png";

function Product() {
  return (
    <div className="w-[24%] relative">
      <Image imgSrc={Bilai} imgAlt={Bilai} className={'w-full'} />
      <Badge badgeText={"new"} className={'absolute top-5 left-5'} />
    </div>
  );
}

export default Product;
