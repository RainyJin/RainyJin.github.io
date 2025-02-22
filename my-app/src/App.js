import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Project1 from "./components/Projects/Project1";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Project2 from "./components/Projects/Project2";
import Drawings from "./components/Projects/Drawings";
import Project3 from "./components/Projects/Project3";
import Research from "./components/Research/Research";
import DoubleSpeed from "./components/Research/DoubleSpeed";
import ColorRemap from "./components/Research/ColorRemap";
import Ender from "./components/Research/Ender";
import Statewise from "./components/Research/Statewise";
import Project4 from "./components/Projects/Project4";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/doublespeed" element={<DoubleSpeed />} />
          <Route path="/statewise" element={<Statewise />} />
          <Route path="/ender" element={<Ender />} />
          <Route path="/colorremap" element={<ColorRemap />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/drawings" element={<Drawings />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
