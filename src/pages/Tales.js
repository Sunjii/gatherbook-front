import axios from "axios";
import React, { useEffect, useState } from "react";
import Navibar from "../components/Navibar";
import TaleCard from "../components/Talecard";
import { SERVER_ADDRESS } from "../constants";

const Tales = () => {
  const [pageCount, setPageCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [pageNum, setPageNum] = useState(0);

  const [loading, setLoading] = useState(false);

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
      .get(`${SERVER_ADDRESS}/tales`, { timeout: 1000 })
      .then((res) => {
        if (res) {
          // rest.data 에는 전체 개수가 옵니다.
          console.log(`res is ${res.data}`);
          // 페이지 개수는 전체/6 입니다.
          setTotalCount(res.data);
          setPageCount(Math.floor(res.data / 6) + 1);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  // 현재 page number에 해당하는 tale들을 가져옵니다.
  const getTales = async (pageNum) => {
    // 먼저 6개의 쿼리를 가져옵니다.
    // 역순으로 가져와야겠지..?
    const talesNum = totalCount;
    console.log(`${talesNum} tale is exist`);

    for (let idx = 0; idx < talesNum; idx++) {
      console.log(`idx: ${idx}`);
      await axios
        .get(`${SERVER_ADDRESS}/tales/${idx}`)
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
              imgurl: res.data.chg_img_url,
            };
            console.log(inputForm);

            setTales((tales) => [...tales, inputForm]);
            setLoading(true);
          }
        })
        .catch((err) => {
          alert(err);
        });
      //break;
    }
  };

  useEffect(() => {
    console.log("useEffect");

    // 서버에서 count를 가져옵니다
    getTalesCount();
    // 서버에서 페이지에 해당하는 tale들을 가져옵니다.
    getTales();

    // 페이지네이션

    // setTotalCount 비동기 처리
  }, [totalCount]);

  const onTest = (e) => {
    console.log(tales);
  };

  return (
    <>
      {loading ? "done" : "Not Yet!"}
      <div className="absolute w-full z-20">
        <Navibar />
      </div>
      <main>
        <div className="relative pt-16 pb-32 flex flex-col items-center justify-center">
          <h1>구경 하기!</h1>
          <button onClick={onTest}>Test Button</button>
          {pageCount ? pageCount : "none"}
        </div>
        <div className="flex flex-row flex-wrap">
          {tales
            ? tales.map((tale) => (
                <TaleCard
                  id={tale.id}
                  title={tale.title}
                  author={tale.author}
                  text={tale.text}
                  imgurl="https://i.imgur.com/FBVlRyg.png"
                />
              ))
            : "NONE"}
        </div>
      </main>
    </>
  );
};

export default Tales;
