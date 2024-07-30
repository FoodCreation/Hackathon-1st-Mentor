import React from "react";
import Header from "./_components/Header/Header"
import Footer from "./_components/Footer/Footer";

import RecommendationApp from "./_components/GetRecommendation";

export default function Home() {
  return (
    <div className="w-full bg-secondary">
      <Header></Header>
      <div className="max-w-4xl lg:mx-auto md:px-10 bg-slate-50 my-16 rounded-3xl shadow-lg mx-5 px-5">
        <RecommendationApp></RecommendationApp>
      </div>
      <Footer></Footer>
    </div>

  );
}
