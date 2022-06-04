import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navibar from "../components/Navibar";
import { Button, Typography } from "@material-tailwind/react";
import { SERVER_ADDRESS } from "../constants";
import DefaultFooter from "../components/Footer";

const Result = () => {
  const location = useLocation();
  //console.log("location!");
  //console.log(location.state);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [resultText, setResultText] = useState("");
  const [styledImage, setStyledImage] = useState(null);
  const [ind, setInd] = useState();

  // 만약 제출 없이 그냥 result 페이지로 접속하는 경우 에러가 발생함!

  useEffect(() => {
    if (!location.state) {
      alert("잘못된 접근!");
      return;
    }
    console.log("useEff");
    console.log(location.state);
    setTitle(location.state.res.title);
    setAuthor(location.state.res.author);
    setResultText(location.state.result_text);
    setStyledImage(location.state.res.chg_file_url);
    setInd(location.state.res.ind);
    //setStyledImage(URL.createObjectURL(location.state.res.styledImage));
  }, []);

  console.log(ind);
  console.log(location.state);
  console.log(`${SERVER_ADDRESS}/${styledImage}`);

  // share 버튼을 누르면 해당 정보를 백엔드로 보내 DB에 저장시킵니다.
  const onShareClick = (e) => {
    // 잠깐.. 이미 서버에서 저장을 시켜놨던가?
    // 그럼 그냥 여기로 올 수 있는 링크를 생성시키면 될까?
    // idx로 하자 그럼
  };

  return (
    <>
      <div className="">
        <Navibar />
      </div>
      <main>
        <div className="relative pt-16 pb-32 flex flex-col content-center items-center justify-center h-screen">
          <div className="w-full lg:w-6/12 px-4 text-center pb-8">
            <div>
              {title ? (
                <Typography
                  className="pb-12"
                  variant="h1"
                  color="light-blue"
                  textGradient
                >
                  {title}
                </Typography>
              ) : (
                "title not found"
              )}
              <div className="flex flex-col gap-10">
                {author ? (
                  <Typography variant="h5">{author}</Typography>
                ) : (
                  "author not found"
                )}
                {resultText ? (
                  <Typography
                    className="border-2 border-dotted rounded-lg px-2 py-2 border-blue-grey-300"
                    variant="paragraph"
                  >
                    {resultText}
                  </Typography>
                ) : (
                  "text not found"
                )}
                {styledImage ? (
                  <img
                    alt="img here"
                    src={`${SERVER_ADDRESS}/${styledImage}`}
                  />
                ) : (
                  "no image"
                )}
              </div>
            </div>
          </div>
          <div>
            <Button size="lg" onClick={onShareClick}>
              공유하기
            </Button>
          </div>
        </div>
      </main>
      <DefaultFooter />
    </>
  );
};

export default Result;
