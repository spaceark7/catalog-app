import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Header-bar";
import HeaderBar from "./components/Header-bar";
import NavBar from "./components/Nav-bar";
function App() {
  return (
    <div className="App">
      {/* // header */}
      <NavBar />
      <HeaderBar />
      {/* // <HeaderBar />
      // Content //footer */}
    </div>
  );
}

export default App;
