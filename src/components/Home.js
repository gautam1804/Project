import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Aboutus from "./Aboutus";
import Sponsors from "./Sponsors";
import Contact from "./Contact";
import Footer from "./Footer";
import Background from './Background';
import Merchandise from "./Merchandise";
import Events from "./Events";
import Team from "../pages/team";

const Home = () => {
  return (
    <>
      <Navbar />
      <Background />
      {/* <Header /> */}
      <Team/>
      {/* <Events/>
      <Merchandise/>
      <Aboutus />
      <Sponsors />
      <Contact />  */}
      <Footer />
    </>
  );
};

export default Home;
