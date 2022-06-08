import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import DefaultFooter from "../components/Footer";
import Navibar from "../components/Navibar";

const About = () => {
  return (
    <>
      <div className=""></div>
      <main className="story-examples">
        <Navibar />
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
          <div className="w-full lg:w-6/12 px-4 text-center">
            <h2>About Us</h2>
            <div></div>
            <div>
              <p>우리는 자연어 한접시!</p>
              <img src="./duck.jpg" alt="" />
            </div>
          </div>
        </div>
      </main>
      <DefaultFooter />
    </>
  );
};

export default About;
