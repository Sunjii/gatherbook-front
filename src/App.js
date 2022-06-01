import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import About from "./pages/About";
import Write from "./pages/Write";
import Test from "./pages/test";
import Tales from "./pages/Tales";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/write" element={<Write />} />
      <Route path="/result" element={<Result />} />
      <Route path="/tales" element={<Tales />} />
      <Route path="/test" element={<Test />} />

      <Route path="/*" element={<h1>404 Error</h1>} />
    </Routes>
  );
};
