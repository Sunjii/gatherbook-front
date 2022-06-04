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
      <main>
        <section className="title-bg">
          <div className="relativea xpt-16 pb-32 flex content-center items-center justify-center">
            <div className="container max-w-8xl relative amx-auto">
              <div className="items-center flex flex-wrap pt-12 px-12 justify-center">
                <div>
                  <img
                    className="max-h-fit max-w-sm lg:max-w-xs transition-all"
                    src="./image1.png"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-6/12 px-4 pt-20 ml-auto mr-auto text-center transition-all">
                  <h1 className="headText">Welcome</h1>
                  <h1 className="headline">Your story starts with us.</h1>
                  <h5 className="headline-description">Ready to be open</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Headline end */}
        {/* Storyline start */}
        <section className="discover-out-story">
          <div className="container">
            <div className="project-info">
              <div className="project-description padding-right animate-left">
                <div className="global-headline">
                  <h1 className="headText">Discover</h1>
                  <h1 className="headline headline-dark">Our Project</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Storyline end */}
        {/* Card section start */}
        <section>
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
        </section>
        {/* Card section end */}
      </main>
      <DefaultFooter />
    </>
  );
};

export default Home;

// pb-80 max-h-screen bg-red-400 flex-initial flex-col
