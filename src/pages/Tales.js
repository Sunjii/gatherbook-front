import axios from "axios";
import React, { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import Navibar from "../components/Navibar";
import TaleCard from "../components/Talecard";
import { SERVER_ADDRESS } from "../constants";

const Tales = () => {
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
          // 페이지 개수는 전체/6 입니다.
          setTotalCount(res.data);
          setPageCount(Math.floor(res.data / 6) + 1);
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
    const talesNum = totalCount;
    // TODO: talesNum 수치를 수정해야함
    console.log(`${talesNum} tale is exist`);

    for (let idx = 0; idx < talesNum; idx++) {
      console.log(`idx: ${idx}`);
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
  };

  useEffect(() => {
    console.log("useEffect");

    // 서버에서 count를 가져옵니다
    getTalesCount();
    // 서버에서 페이지에 해당하는 tale들을 가져옵니다.
    getTales();

    // 페이지네이션

    // setTotalCount 비동기 처리
  }, [totalCount, serverState]);

  const onTest = (e) => {
    console.log(tales);
  };

  return (
    <>
      <div className="absolute w-full z-20">
        <Navibar />
      </div>
      {loading ? (
        <main>
          <div className="relative pt-16 pb-32 flex flex-col items-center justify-center">
            <h1>구경 하기!</h1>
            <button onClick={onTest}>Test Button</button>
            <h1>Page</h1>
            <div className="flex flex-row gap-4">
              {pageCount
                ? [...Array(pageCount)].map((_, idx) => (
                    <div className="cursor-pointer" onClick={onPageClick}>
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
        </main>
      ) : (
        <main>
          <div className="relative h-screen pt-16 pb-32 flex items-center justify-center">
            <SpinnerCircular size={150} enabled={true} />
          </div>
        </main>
      )}
    </>
  );
};

export default Tales;
