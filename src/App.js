import React from "react";
import ReactDOM from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

//* project


const Applayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Applayout />);
