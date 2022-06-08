import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DefaultFooter from "../components/Footer";
import Navibar from "../components/Navibar";

const About = () => {
  return (
    <>
      <div className=""></div>
      <main className="about-page">
        <Navibar />
        <div className="relative pt-16 pb-32 flex content-centerX items-center justify-center h-screenX">
          <div className="px-12 text-center 2xl:px-52">
            <h2 className="text-6xl font-dungen about-headline mb-12">
              우리는 자연어 한접시!
            </h2>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="flex flex-col">
                <img
                  src="./jin.png"
                  alt=""
                  className="border-4 border-white bg-white rounded-full"
                />
                <div className="bg-blue-400 border-4 opacity-80 rounded-3xl px-2 py-2 hover:bg-blue-800 duration-300">
                  <p className="text-white text-3xl">강진희</p>
                  <p className="text-myYellow text-xl">#데이터 수집</p>
                  <p className="text-myYellow text-xl">#키워드 추출</p>
                  <p className="text-myYellow text-xl">#문서 작성</p>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </div>
              </div>
              <div className="flex flex-col">
                <img
                  src="./sun.png"
                  alt=""
                  className="border-4 border-white bg-white rounded-full"
                />
                <div className="bg-blue-400 border-4 opacity-80 rounded-3xl px-2 py-2 hover:bg-blue-800 duration-300">
                  <p className="text-white text-3xl">김선재</p>
                  <p className="text-myYellow text-xl">#문장추천</p>
                  <p className="text-myYellow text-xl">#FastAPI</p>
                  <p className="text-myYellow text-xl">#DB 작업</p>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </div>
              </div>
              <div className="flex flex-col">
                <img
                  src="./tae.png"
                  alt=""
                  className="border-4 border-white bg-white rounded-full"
                />
                <div className="bg-blue-400 border-4 opacity-80 rounded-3xl px-2 py-2 hover:bg-blue-800 duration-300">
                  <p className="text-white text-3xl">김태훈</p>
                  <p className="text-myYellow text-xl">#데이터 분석</p>
                  <p className="text-myYellow text-xl">#데이터 전처리</p>
                  <p className="text-myYellow text-xl">#Architecture</p>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </div>
              </div>
              <div className="flex flex-col">
                <img
                  src="./do.png"
                  alt=""
                  className="border-4 border-white bg-white rounded-full"
                />
                <div className="bg-blue-400 border-4 opacity-80 rounded-3xl px-2 py-2 hover:bg-blue-800 duration-300">
                  <p className="text-white text-3xl">이도훈</p>
                  <p className="text-myYellow text-xl">#GPT-3</p>
                  <p className="text-myYellow text-xl">#파인튜닝</p>
                  <p className="text-myYellow text-xl">#React</p>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </div>
              </div>
              <div className="flex flex-col">
                <img
                  src="./gyung.png"
                  alt=""
                  className="border-4 border-white bg-white rounded-full"
                />
                <div className="bg-blue-400 border-4 opacity-80 rounded-3xl px-2 py-2 hover:bg-blue-800 duration-300">
                  <p className="text-white text-3xl">차경민</p>
                  <p className="text-myYellow text-xl">#StyleGAN</p>
                  <p className="text-myYellow text-xl">#GPT-2</p>
                  <p className="text-myYellow text-xl">#Seq2Seq</p>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="./duck.jpg"
                alt=""
                className="scale-50 rounded-3xl border-8 border-myBlue shadow-2xl"
              />
              <h1 className="about-headline font-dungen text-6xl">Reference</h1>
              <div className="bg-white px-12 py-12 opacity-80 rounded-2xl">
                <p className="text-lg">Dataset</p>
                <ul className="text-left">
                  <li>- 어린이 전래동화 (청와대)</li>
                  <li>- 국립국어원 모두의 말뭉치 비출판물 데이터</li>
                  <li>- 그림형제 동화</li>
                  <li>- 이솝우화 동화</li>
                  <li>- 신춘문예 당선작</li>
                </ul>
                <hr />
                <p className="text-lg">Paper</p>
                <ul className="text-left">
                  <li>- Seq2Seq:: https://arxiv.org/abs/1409.3215</li>
                  <li>- KoGPT2:: https://github.com/SKT-AI/KoGPT2</li>
                  <li>
                    - KoGPT trinity::
                    https://huggingface.co/skt/ko-gpt-trinity-1.2B-v0.5
                  </li>
                  <li>- StyleGAN:: https://arxiv.org/abs/1812.04948</li>
                </ul>
                <hr />
                <a
                  href="https://www.flaticon.com/kr/free-stickers/-"
                  className="hover:text-myBlue"
                  title="동물 군 스티커"
                >
                  동물 군 스티커 제작자: Stickers - Flaticon
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <DefaultFooter />
    </>
  );
};

export default About;
