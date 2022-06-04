import { Typography } from "@material-tailwind/react";
import React from "react";
import DefaultFooter from "../components/Footer";
import Navibar from "../components/Navibar";
import TaleCard from "../components/Talecard";
import { examples } from "../constants";

const Home = () => {
  return (
    <>
      <div className="">
        <Navibar />
      </div>
      <main className="flext">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
          <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
          <div className="container max-w-8xl relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div>
                <img
                  className="max-h-fit lg:max-w-xs transition-all"
                  src="https://i.imgur.com/TDBQ9tf.jpeg"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center transition-all">
                <Typography variant="h2" color="">
                  Your story starts with us.
                </Typography>
                <div className="text-gray-200">
                  <Typography color="gray-200">
                    Nullam elementum, lectus et suscipit tristique, orci massa
                    sollicitudin ipsum, eget molestie ex nibh in risus. Praesent
                    sed felis semper neque semper bibendum at sit amet nisl.
                    Donec varius auctor metus at feugiat.
                  </Typography>
                </div>
              </div>
            </div>
            <div className="py-20 px-20 flex xl:flex-row items-center justify-center transition-all gap-8 flex-col">
              {examples.map((exam) => (
                <TaleCard
                  id={exam.id}
                  title={exam.title}
                  author={exam.author}
                  text={exam.text}
                  imgbs64={exam.imgbs64}
                  className="max-h-fit"
                />
              ))}
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
