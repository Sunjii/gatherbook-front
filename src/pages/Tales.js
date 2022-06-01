import React from "react";
import Navibar from "../components/Navibar";
import TaleCard from "../components/Talecard";

const Tales = () => {
  return (
    <>
      <div className="absolute w-full z-20">
        <Navibar />
      </div>
      <main>
        <div className="relative pt-16 pb-32 flex flex-col items-center justify-center">
          <h1>구경 하기!</h1>
        </div>
        <div className="w-full lg:w-6/12 px-4 text-center pb-10">
          <TaleCard />
        </div>
      </main>
    </>
  );
};

export default Tales;
