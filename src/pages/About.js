import React from "react";
import Navibar from "../components/Navibar";

const About = () => {
  return (
    <>
      <div className="absolute w-full z-20">
        <Navibar />
      </div>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
          <div className="w-full lg:w-6/12 px-4 text-center">
            <h2>About Us</h2>
            <div>
              <p>우리는 자연어 한접시!</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
