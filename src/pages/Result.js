import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navibar from "../components/Navibar";

const Result = () => {
  const location = useLocation();
  //console.log("location!");
  //console.log(location.state);

  const [resultText, setResultText] = useState("");
  const [styledImage, setStyledImage] = useState(null);

  // 만약 제출 없이 그냥 result 페이지로 접속하는 경우 에러가 발생함!

  useEffect(() => {
    if (!location.state) {
      alert("잘못된 접근!");
      return;
    }
    console.log("useEff");
    setResultText(location.state.result_text);
    setStyledImage(location.state.res.styledImage);
    //setStyledImage(URL.createObjectURL(location.state.res.styledImage));
  }, []);

  //console.log(location.state.res.styledImage);
  //console.log(location.state.res.styledImage.file);
  //console.log(resultText);
  console.log(styledImage);

  return (
    <>
      <div className="absolute w-full z-20">
        <Navibar />
      </div>
      <main>
        <div className="relative pt-16 pb-32 flex flex-col content-center items-center justify-center h-screen">
          <div className="w-full lg:w-6/12 px-4 text-center pb-10">
            <h1>Title</h1>
            <div>
              <p>{resultText ? resultText : "no"}</p>
              {styledImage ? styledImage : "no_image"}
            </div>
          </div>
          <div>
            <button size="lg">공유하기</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Result;
// <p>{styledImage ? styledImage : "no image"}</p>
// <img alt="" width="180" height="180" src={styledImage} />
