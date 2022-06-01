import React from "react";
import Navibar from "../components/Navibar";

const Home = () => {
  return (
    <>
      <div className="absolute w-full z-20">
        <Navibar />
      </div>
      <main></main>
    </>
  );
};

export default Home;
// tailwindcss -i ./src/css/style.css -o ./src/css/tailwind.css
//
