import React from "react";
import Header from "./_components/Header/Header";

import HungerSlider from "./_components/HungerSlider";
import SelectGenre from "./_components/SelectGenre";

export default function Home() {
  return (
    <div className="lg:max-w-full">
      <Header></Header>
      <div className="max-w-4xl mx-auto">
        <HungerSlider></HungerSlider>
        <SelectGenre></SelectGenre>
      </div>
    </div>

  );
}
