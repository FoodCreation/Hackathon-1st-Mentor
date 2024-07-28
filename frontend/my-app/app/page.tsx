import React from "react";
import Header from "./_components/Header/Header"
import Footer from "./_components/Footer/Footer";

import HungerSlider from "./_components/HungerSlider";
import SelectGenre from "./_components/SelectGenre";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header></Header>
      <div className="max-w-4xl mx-auto">
        <HungerSlider></HungerSlider>
        <SelectGenre></SelectGenre>
      </div>
      <Footer></Footer>
    </div>

  );
}
