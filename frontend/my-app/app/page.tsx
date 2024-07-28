import React from "react";
import Header from "./_components/Header/Header"
import Footer from "./_components/Footer/Footer";

import SubmitForm from "./_components/SubmitForm";

export default function Home() {
  return (
    <div className="w-full bg-secondary">
      <Header></Header>
      <div className="max-w-4xl mx-auto px-10 bg-slate-50 my-16 rounded-3xl shadow-lg">
        <SubmitForm></SubmitForm>
      </div>
      <Footer></Footer>
    </div>

  );
}
