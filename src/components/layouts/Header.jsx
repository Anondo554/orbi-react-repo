import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/Logo.png";
import Menu from "../Menu";
import { HiMiniBars2 } from "react-icons/hi2";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

import Heading from "../Heading";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="py-[32px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[40%]">
              <Link to={"/"}>
                <Image imgSrc={Logo} imgAlt={Logo} />
              </Link>
            </div>
            <div className="w-[60%]">
              <Menu className={"text-sm text-menuColor"}>
                <Link to={"/"}>
                  <li className="hover:text-menuHcolor hover:font-bold duration-300">
                    Home
                  </li>
                </Link>
                <Link to={"shop"}>
                  <li className="hover:text-menuHcolor hover:font-bold duration-300">
                    Shop
                  </li>
                </Link>
                <li className="hover:text-menuHcolor hover:font-bold duration-300">
                  About
                </li>
                <li className="hover:text-menuHcolor hover:font-bold duration-300">
                  Contacts
                </li>
                <li className="hover:text-menuHcolor hover:font-bold duration-300">
                  Journal
                </li>
              </Menu>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="bg-categoryBg py-6 ">
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="w-[30%]">
              <Flex className={"gap-3 items-center"}>
                <HiMiniBars2 />
                <Heading
                  as={"p"}
                  text={"Shop by Category"}
                  className={"text-sm text-menuHcolor"}
                />
              </Flex>
            </div>
            <div className="w-[40%] relative">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full rounded-md p-4 bg-white outline-none"
              />
              <FaSearch className="absolute top-1/2 right-3 -translate-y-1/2 " />
            </div>
            <div className="w-[20%]">
              <Flex className={"gap-8 justify-end"}>
                <div className="flex gap-2">
                  <FaUser />
                  <FaCaretDown />
                </div>
                <FaShoppingCart />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default Header;
