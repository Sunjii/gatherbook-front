import React from "react";
import Navibar from "../components/Navibar";

const Home = () => {
  return (
    <>
      <div className="absolute w-full z-20">
        <Navibar />
      </div>
      <main>
        <div className="pb-80 px-40 bg-brown-400">
          <div className="pb-80 max-h-screen bg-red-400 flex-initial flex-col">
            B
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
