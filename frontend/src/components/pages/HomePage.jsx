import React from "react";
import Cards from "../homepage/Cards";
import Footer from "../footer/Footer";
import Heading from "../homepage/Heading";
import Navbar from "../navbar/Navbar";
import Reviews from "../homepage/Reviews";
import Selector from "../homepage/Selector";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Selector />
      <Cards/>
      <Heading/>
      <Reviews/>
      <Footer />
    </div>
  );
};

export default HomePage;
