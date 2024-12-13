import React from "react";
import Header from "../layouts/Header"; 
import Promtion from "../layouts/Promtion";
import Banner from "../layouts/Banner";
import Guarantee from "../layouts/Guarantee";  
import Products from "../layouts/Products";
const Home = () => {
  return (
    <>
     <Header/>
     <Banner/>
     <Guarantee/>
     <Promtion/>  
     <Products/>
    </>
  );
};

export default Home;
