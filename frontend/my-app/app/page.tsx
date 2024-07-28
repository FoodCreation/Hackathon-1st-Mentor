import React from "react";
import Header from "./_components/Header/Header"
import Footer from "./_components/Footer/Footer";

import SubmitForm from "./_components/SubmitForm";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header></Header>
      <div className="max-w-4xl mx-auto">
        <SubmitForm></SubmitForm>
      </div>
      <Footer></Footer>
    </div>

  );
}
