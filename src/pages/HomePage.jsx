import React from "react";
import { Cards } from "../components/Cards";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Selector from "../components/Selector";

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
