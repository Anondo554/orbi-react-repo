import Container from "../Container";
import React from "react";
import Image from "../Image";
import OfferOne from "../../assets/offerOne.png";
import Offertwo from "../../assets/OfferTwo.png";
import OfferThree from "../../assets/OfferThree.png";
import Flex from "../Flex";

function Promtion() {
  return (
    <div className="pt-[174px]">
      <Container>
        <Flex className={'gap-5'}> 
          <div className="w-1/2">
            <Image imgSrc={OfferOne} imgAlt={OfferOne} />
          </div>
          <div className="w-1/2"> 
              <Image imgSrc={Offertwo} imgAlt={Offertwo} className={"w-full h-[48%] mb-6"}/>
              <Image imgSrc={OfferThree} imgAlt={OfferThree} className={"w-full h-[48%]"}/> 
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Promtion;
