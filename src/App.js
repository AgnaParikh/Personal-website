import React from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Description from "./Components/Description";
import About from "./Components/About";
import {Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/about" element={<About />} />
          <Route
          path="/"
          element={
            <>
              <Content />
              <Description />
            </>
          }
        />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
