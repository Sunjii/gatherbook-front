import { Typography } from "@material-tailwind/react";
import React from "react";
import DefaultFooter from "../components/Footer";
import Navibar from "../components/Navibar";

const Home = () => {
  return (
    <>
      <div className="">
        <Navibar />
      </div>
      <main className="flex">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
          <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
          <div className="container max-w-8xl relative mx-auto">
            <div className="items-center flex flex-wrap">
              <img src="https://i.imgur.com/TDBQ9tf.jpeg" alt="" />
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <Typography variant="h2" color="">
                  Your story starts with us.
                </Typography>
                <div className="text-gray-200">
                  <Typography color="gray-200">
                    This is a simple example of a Landing Page you can build
                    using Material Tailwind. It features multiple components
                    based on the Tailwind CSS and Material Design by Google.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <DefaultFooter />
    </>
  );
};

export default Home;

// pb-80 max-h-screen bg-red-400 flex-initial flex-col
