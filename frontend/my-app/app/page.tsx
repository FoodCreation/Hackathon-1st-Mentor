import React from "react";
import Header from "./_components/Header/Header";

import HungerSlider from "./_components/HungerSlider";

export default function Home() {
  return (
    <>
      <div className="lg:max-w-full">
        <Header></Header>
      </div>
      <div>
        <HungerSlider></HungerSlider>
      </div>
    </>
  );
}
