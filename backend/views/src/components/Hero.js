import React from "react";
import Nav from "./Nav";
import Categories from "./Categories";
import TopBar from "./TopBar";
import CopyRight from "./CopyRight";

function Hero() {
  return (
    <section className=" h-screen w-100 flex">
      <div className=" w-[12%] bg-slate-900">
        <Nav />
      </div>
      <div className=" w-[88%] bg-slate-600 flex justify-between flex-col">
        <div>
          <TopBar />
        </div>
        <div className=" bg-gray-200 h-screen p-3">
          <div><h1 className=" font-Montserrat font-light text-xl uppercase  ">Time Wall</h1></div>
          <div>
            <Categories />
          </div>
        </div>
        <div>
          <CopyRight />
        </div>
      </div>
    </section>
  );
}

export default Hero;
