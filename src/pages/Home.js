import React from "react";
import Navibar from "../components/Navibar";

const Home = () => {
  return (
    <>
      <div className="">
        <Navibar />
      </div>
      <main className="flext">
        <div className="pb-80 px-40 bg-brown-400">
          <div className="pb-80 max-h-screen bg-red-400 flex-initial flex-col">
            <div>빠라 삐리 뽀!</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
