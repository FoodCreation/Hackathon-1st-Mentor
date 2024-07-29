import React from "react";
import Header from "./_components/Header/Header"
import Footer from "./_components/Footer/Footer";

import RecommendationApp from "./_components/GetRecommendation";

export default function Home() {
  return (
    <div className="w-full bg-secondary">
      <Header></Header>
      <div className="max-w-4xl mx-auto px-10 bg-slate-50 my-16 rounded-3xl shadow-lg">
        <RecommendationApp></RecommendationApp>
      </div>
      <Footer></Footer>
    </div>

  );
}
