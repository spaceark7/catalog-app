import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Header-bar";
import HeaderBar from "./components/Header-bar";
import NavBar from "./components/Nav-bar";
import Contents from "./components/Contents";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      {/* // header */}
      <NavBar />

      <HeaderBar />
      <Contents />
      <Projects />
      {/* // <HeaderBar />
      // Content
      
       //footer */}
    </div>
  );
}

export default App;
