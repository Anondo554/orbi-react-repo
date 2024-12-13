import React from "react";
import { PiNumberTwoBold } from "react-icons/pi";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import { FaCarSide } from "react-icons/fa";
import { VscRefresh } from "react-icons/vsc";
export default function Guarantee() {
  return (
    <div className="border-b-2 border-b-borderColor py-[30px]">
      <Container>
        <Flex className={"justify-between"}>
          <div>
            <Flex className={"items-center gap-x-10"}>
              <PiNumberTwoBold className="text-menuHcolor text-4xl " />
              <Heading
                as={"p"}
                text={"Two years warranty"}
                className={"text-[16px] text-[#6D6D6D] "}
              />
            </Flex>
          </div>
          <div>
            <Flex className={"items-center gap-x-10"}>
              <FaCarSide className="text-menuHcolor text-4xl " />
              <Heading
                as={"p"}
                text={"Free shipping"}
                className={"text-[16px] text-[#6D6D6D] "}
              />
            </Flex>
          </div>
          <div>
            <Flex className={"items-center gap-x-10"}>
              <VscRefresh className="text-menuHcolor text-4xl" />
              <Heading
                as={"p"}
                text={"Return policy in 30 days"}
                className={"text-[16px] text-[#6D6D6D] "}
              />
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
}
