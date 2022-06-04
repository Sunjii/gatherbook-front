import { Button, IconButton, Textarea } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navibar from "../components/Navibar";
import TaleCard from "../components/Talecard";
import { SERVER_ADDRESS } from "../constants";

const Test = () => {
  const [img, setImg] = useState();
  const [imgFrom, setImgFrom] = useState();

  const onClick = async (e) => {
    const fd = new FormData();
    fd.append("sentences", "text is here");
    fd.append("file", img);

    await axios
      //.post(`${SERVER_ADDRESS}/file`)
      .post("http://127.0.0.1:8001/submit", fd)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onClick2 = async (e) => {
    await axios
      .get(`${SERVER_ADDRESS}/file`)
      .then((res) => {
        console.log("wowow");
        console.log(res);
        //console.log(res.data);
        setImgFrom(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onClick3 = (e) => {
    console.log(imgFrom);
    console.log(typeof imgFrom);
  };

  return (
    <>
      <div className=""></div>
      <main>
        <Button onClick={onClick}>button</Button>
        <Button onClick={onClick2}>button2</Button>
        <Button onClick={onClick3}>checkstate</Button>
        <img
          width="180"
          height="180"
          src={`data:image/png;base64,${imgFrom}`}
          alt=""
        />
      </main>
    </>
  );
};

export default Test;

// <img width="180" height="180" src={{ uri: imgFrom }} alt="" />
