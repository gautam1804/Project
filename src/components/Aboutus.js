import React, { useState } from "react";
import howToUseApp from "../Api/howToUse.js";
import Header from "./Header";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <>
    <Header/>
    </>
  );
};

export default Aboutus;
