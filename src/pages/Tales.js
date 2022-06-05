import { Chip, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import DefaultFooter from "../components/Footer";
import Navibar from "../components/Navibar";
import TaleCard from "../components/Talecard";
import { SERVER_ADDRESS } from "../constants";

const Tales = (props) => {
  //const currentPage = props.pageNum;
  const [currentPage, setCurrentPage] = useState(0);
  const talesNum = 6;

  const [pageCount, setPageCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [pageNum, setPageNum] = useState(0);

  const [loading, setLoading] = useState(false);
  const [serverState, setServerState] = useState(true);
  const defaultImg =
    "https://mblogthumb-phinf.pstatic.net/MjAxOTA0MTFfMyAg/MDAxNTU0OTY0NDExODM3.yq8kEVXlmOBw6q-5jyZceq2rxtUAfmCn00KjOfjf6CEg.K3qeB83x7EnikNTcr7XyDiB9Li9VOHcXV6t_6JUo7iog.PNG.goproblem/2gsjgna1uruvUuS7ndh9YqVwYGPLVszbFLwwpAYXZ1rkyz7vKAbhJvHdPRzCvhGfPWQdhkcqKLhnajnHFpGdgkDq3R1XmTFaFxUfKbVyyA3iDi1Fzv.png?type=w2";

  // tales 에는 {'id', 'title', 'author', 'text', 'imge'}가 있음
  const [tale, setTale] = useState({
    id: "",
    title: "",
    author: "",
    text: "",
    image: "",
  });
  const [tales, setTales] = useState([]);

  const getTalesCount = async (e) => {
    const response = await axios
      .get(`${SERVER_ADDRESS}/tales`, { timeout: 10000 })
      .then((res) => {
        if (res) {
          // rest.data 에는 전체 개수가 옵니다.
          console.log(`res is ${res.data}`);
          // 페이지 개수는 전체/talesNum 입니다.
          setTotalCount(res.data);
          setPageCount(Math.floor(res.data / talesNum) + 1);
          setServerState(true);
        }
      })
      .catch((err) => {
        alert(
          err + "\n현재 서버가 중지된 상태입니다. 관리자에게 문의해주세요!"
        );
      });
  };

  // 현재 page number에 해당하는 tale들을 가져옵니다.
  const getTales = async (pageNum) => {
    // 먼저 6개의 쿼리를 가져옵니다.
    // 역순으로 가져와야겠지..?
    //const talesNum = totalCount;

    console.log(`get ${talesNum}개 tale `);
    console.log(currentPage, " 번째 페이지 접근중");

    // 이전 tales를 비워줍니다
    setTales([]);

    // 페이지 넘버에 맞는 tales를 가져옵니다.

    // 0; idx <= talesNum
    for (
      let idx = currentPage * talesNum + 1;
      idx <= currentPage * talesNum + talesNum;
      idx++
    ) {
      await axios
        .get(`${SERVER_ADDRESS}/tales/${idx}`, { timeout: 10000 })
        .then((res) => {
          // res 에는 데이터가 옵니다..
          if (res.data.message) {
            // message는 오류임 (없다는 뜻)
            return;
          } else {
            console.log(`getTales [res] is ${res.data.message}`);
            console.log(res.data);

            const inputForm = {
              id: idx,
              title: res.data.title,
              author: res.data.author,
              text: res.data.text,
              imgbs64: res.data.chg_img_bs64,
            };
            console.log(inputForm);

            setTales((tales) => [...tales, inputForm]);
            setLoading(true);
          }
        })
        .catch((err) => {
          //alert(err);
        });
      //break;
    }
  };

  // page 클릭에 따라서 해당되는 쿼리를 돌립니다.
  const onPageClick = (e) => {
    console.log(e.target.innerText);
    setCurrentPage(e.target.innerText);
  };

  useEffect(() => {
    console.log("useEffect");

    // 서버에서 count를 가져옵니다
    getTalesCount();
    // 서버에서 페이지에 해당하는 tale들을 가져옵니다.
    //getTales();

    // 페이지네이션

    // setTotalCount 비동기 처리
  }, [totalCount, serverState]);

  useEffect(() => {
    getTales();
  }, [currentPage]);

  const onTest = (e) => {
    console.log(tales);
    console.log(pageCount);
  };

  return (
    <>
      <div className=""></div>
      <div className="write-bg">
        <Navibar />
        {loading ? (
          <main className="pb-12">
            <div className="">
              <div className="relative pt-16 pb-32 flex flex-col items-center justify-center">
                <Typography color="light-blue" variant="h1">
                  구경 하기!
                </Typography>
                <button className="invisible" onClick={onTest}>
                  Test Button
                </button>
                {totalCount
                  ? `현재 총 ${totalCount}건의 글이 있습니다!`
                  : "아직 아무것도 없네요!"}
                <Chip value="PAGE" />
                <div className="pt-4 flex flex-row gap-4 text-blue-400">
                  {pageCount
                    ? [...Array(pageCount)].map((_, idx) => (
                        <div
                          className="cursor-pointer hover:text-white hover:scale-150 duration-200"
                          onClick={onPageClick}
                        >
                          {idx}
                        </div>
                      ))
                    : "none"}
                </div>
              </div>
              <div className="px-8 flex flex-row flex-wrap gap-10">
                {tales
                  ? tales.map((tale) => (
                      <TaleCard
                        id={tale.id}
                        title={tale.title}
                        author={tale.author}
                        text={tale.text}
                        imgbs64={tale.imgbs64 ? tale.imgbs64 : "no"}
                      />
                    ))
                  : "NONE"}
              </div>
              <div className="py-8 flex flex-col items-center justify-center">
                <Chip value="PAGE" />
                <div className="pt-4 flex flex-row gap-4 text-blue-400">
                  {pageCount
                    ? [...Array(pageCount)].map((_, idx) => (
                        <div
                          className="cursor-pointer hover:text-white hover:scale-150 duration-200"
                          onClick={onPageClick}
                        >
                          {idx}
                        </div>
                      ))
                    : "none"}
                </div>
              </div>
            </div>
          </main>
        ) : (
          <main>
            <div className="relative h-screen pt-16 pb-32 flex items-center justify-center">
              <SpinnerCircular size={150} enabled={true} />
            </div>
          </main>
        )}
      </div>
      <DefaultFooter />
    </>
  );
};

export default Tales;
