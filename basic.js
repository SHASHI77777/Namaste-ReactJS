import React from "react";
import ReactDOM from "react";
import { createRoot } from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello  react js "
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [
//      React.createElement(
//      "div",
//        { id: "child" },
//         [React.createElement("h1", {id: "heading" },"This is namaste react 🚀 "),
//         React.createElement("h1", {id: "heading" },"i'm am h2 tag"),
//     ]),
//         React.createElement(
//         "div",
//           { id: "child2" },
//            [
//             React.createElement("h1", {id: "heading" },"i'm am h3 tag"),
//            React.createElement("h1", {id: "heading" },"i'm am h4 tag"),
//        ]),
//     ]);

// console.log(parent); //!object

// !React Element => object => Html Element(render)

// const heading = React.createElement(
//  "h1",
// { id:"heading",xyz:"abc"},
// "Hello world from React!"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(heading);

//  root.render(parent);

//! JSX   is not html in js -> is look like xml and html

// const JsxHeading = <h1 id="heading">Namaste Reactjs from JSX </h1>

//  const rootElement = document.getElementById("root");
//  const root = createRoot(rootElement);
// const root = createRoot(document.getElementById("root"));

// root.render(JsxHeading);

//?  React Component
//! 1.Class Based Component - OLD
//! Functional  Component - NEW

//*  React Functional  Component

// const Heading1 = () => (
//   <h1 className="head" tabIndex="5">
//     Namaste React from JSX
//   </h1>
// );

// //* React elememt
// const elem = <span>React Element </span>;

// //* React elememt to  React elememt
// const Heading = (
//   <h1 className="head" tabIndex="5">
//    {elem}
//     Hello world from React!
//   </h1>
// );
// //* js variable
// const number = 1000;

// //* Component  compositions
// //* All in one we can call and run

// const Heading2 = () => (
//   <div id="heading">
//     {number + 200}
//     {Heading}
//     <Heading1 />
//     <h1> Namaste React from Functional Component </h1>;
//   </div>
// );
// const root = createRoot(document.getElementById("root"));
// root.render(<Heading2 />);