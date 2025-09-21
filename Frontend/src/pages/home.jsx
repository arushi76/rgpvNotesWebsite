import React from "react";
import Herosection from "../components/heroSection";
import FirstYear from "../components/firstYear";
import SecondYear from "../components/secondYear";
import ThirdYear from "../components/thirdYear";

const Home = () => {
  return (
    <div>
      <Herosection />
      <FirstYear />
      <SecondYear />
      <ThirdYear />
    </div>
  );
}

export default Home;
