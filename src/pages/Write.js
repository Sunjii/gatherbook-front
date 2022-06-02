import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

import axios from "axios";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Navibar from "../components/Navibar";
import { Alert, Input, Textarea } from "@material-tailwind/react";
import { SERVER_ADDRESS } from "../constants";

const Write = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const submitRef = useRef();

  const [open, setOpen] = useState(false);

  const [maxLen, setMaxLen] = useState(50);
  const [temperature, setTemperature] = useState(0.85);
  const [repetPenalty, setRepetPenalty] = useState(1.5);

  const [imgFile, setImgFile] = useState(null);
  const [imgFileData, setImgFileData] = useState(null);
  const [imgBase64, setImgBase64] = useState([]); // base64 encoding
  const imgInputRef = useRef();

  const onChange = (e) => {
    setText(e.target.value); //
    //setResult(result.concat(e.target.value)); // textarea
  };
  const onChangeTA = (e) => {
    setResult(e.target.value);
  };

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const sendResult = (e) => {
    setModalOpen(false);
    console.log(e);
  };

  // input 입력 - 서버로 string 전송 후 predict string을 받아옴
  const onKeyPress = async (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        // 빈 입력 방지
        alert("빈 입력은 허용되지 않습니다!");
        return;
      }
      const target = e.target.value;
      setText("");

      // Form data
      const fd = new FormData();
      fd.append("data", target);
      // POST request //
      await axios
        .post(`${SERVER_ADDRESS}/spellcheck`, fd, {
          headers: {
            "Content-Type": `stringpart/form-data`,
          },
        })
        .then((res) => {
          if (res.data) {
            // Result Text Area에 들어감
            const going = target + " " + res.data.pred;
            setResult(result.concat(going + " "));
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  // image 업로드 -> Base64 encoding -> 브라우저에 띄움
  const onImageUpload = (e) => {
    if (e.target.files[0]) {
      setImgFile(URL.createObjectURL(e.target.files[0]));
      console.log(e.target.files[0]);
      setImgFileData(e.target.files[0]); //imgFile
      setImgBase64([]);
      // base64 encode
      for (var i = 0; i < e.target.files.length; i++) {
        if (e.target.files[i]) {
          let reader = new FileReader();
          reader.readAsDataURL(e.target.files[i]);
          // File load
          reader.onload = () => {
            const base64 = reader.result; // bitmap data return
            //console.log(base64);
            if (base64) {
              var base64Sub = base64.toString();
              // base64 update
              setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
            }
          };
        }
      }
      //
    }
  };

  const onImageUploadBtnClick = (e) => {
    e.preventDefault();
    console.log("click");
    imgInputRef.current.click();
  };

  // 제출 -> text area & image 서버로 전송
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!result) {
      alert("완성된 글이 없습니다!");
      return;
    }

    const fd = new FormData();
    if (imgFile) {
      // Object.values(imgBase64).forEach((file) => fd.append("file", file)); base64
      console.log("imgFile fd 탑재");
      console.log(imgFileData);
      fd.append("file", imgFileData);
    } else {
      fd.append("file", null);
    }
    fd.append("text", result);
    fd.append("author", "작가 미상");
    fd.append("title", "제목이다");

    console.log(fd);
    await axios
      .post(`${SERVER_ADDRESS}/submit`, fd, {
        headers: {
          "Content-Type": `multipart/form-data;`,
        },
      })
      .then((res) => {
        // page 전환
        // res에는 StyleGAN이 적용된 이미지가 옴
        if (res.data) {
          console.log(res.data);
        }
        navigate("/result", {
          state: {
            result_text: result,
            res: res.data,
          },
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onPingPong = (e) => {
    e.preventDefault();
    const res = axios
      .get(`${SERVER_ADDRESS}/`)
      .then(function (res) {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="absolute w-full z-20">
        <Navibar />
      </div>
      <main>
        <div className="max-w-screen-xlt pb-20 px-40">
          <div className="max-w-screen-xlt flex-initial flex-col justify-center items-center py-20 pb-10">
            <div
              className="rounded-xl h-8 max-w-xs mx-auto bg-green-400 flex items-center justify-center hover:bg-red-400"
              onClick={onPingPong}
            >
              Ping!
            </div>
            <div className="max-w-screen-md mx-auto py-20">
              <div className="text-center">
                <h1 color="amber">동화 글쓰기</h1>
              </div>
              <p className="text-right">{result.length} / 1024</p>
              <Textarea
                label="Result"
                ref={submitRef}
                value={result}
                onChange={onChangeTA}
                placeholder="Result"
                variant="outlined"
                color="teal"
              />
            </div>
            <div className="max-w-screen-md mx-auto pb-6">
              <Alert color="green" className="mb-8">
                문장을 입력하는 경우에는 구두점(. ! ?)을 빼먹지 말아주세요!
              </Alert>
              <Input
                label="글을 써봅시다!"
                onChange={onChange}
                value={text}
                onKeyPress={onKeyPress}
                variant="outlined"
              />
            </div>
            <div>
              <button onClick={openModal}>도움말</button>

              <p>문장 길이 {maxLen}</p>
              <Slider
                min={30}
                max={128}
                defaultValue={50}
                onChange={(e) => {
                  setMaxLen(e);
                }}
              />
              <p>Temperature {temperature}</p>
              <Slider
                min={1}
                max={100}
                defaultValue={85}
                onChange={(e) => {
                  setTemperature(e / 100);
                }}
              />
              <p>Repetition Penalty {repetPenalty}</p>
              <Slider
                min={10}
                max={50}
                defaultValue={15}
                onChange={(e) => {
                  setRepetPenalty(e / 10);
                }}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="max-w-screen-md mx-auto content-evenly px-10 py-10 flex flex-row space-x-12">
                {imgFile === "" ? (
                  <p className="text-red-800">no image</p>
                ) : (
                  <img
                    className=""
                    alt=""
                    width="180"
                    height="180"
                    src={imgFile}
                  />
                )}
                <div>
                  <input
                    ref={imgInputRef}
                    type="file"
                    id="uploadImg"
                    accept="image/*"
                    name="file"
                    onChange={onImageUpload}
                    style={{ display: "none" }}
                  />
                  <div className="">
                    <button
                      className="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-800"
                      onClick={onImageUploadBtnClick}
                    >
                      사진 업로드
                    </button>
                    <button
                      className="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-800"
                      type="submit"
                    >
                      완성! 제출!
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
};

export default Write;
