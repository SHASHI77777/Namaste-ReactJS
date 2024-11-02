// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello  react js "
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
     React.createElement(
     "div",
       { id: "child" },
        [React.createElement("h1", {id: "heading" },"i'm am h1 tag"),
        React.createElement("h1", {id: "heading" },"i'm am h2 tag"),
    ]),
        React.createElement(
        "div",
          { id: "child2" },
           [
            React.createElement("h1", {id: "heading" },"i'm am h3 tag"),
           React.createElement("h1", {id: "heading" },"i'm am h4 tag"),
       ]),
    ]);
 
console.log(parent);

const heading = React.createElement(
 "h1", 
{ id:"heading",xyz:"abc"}, 
"Hello world from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

 root.render(parent);

