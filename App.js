import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1 from parcel"
  );  

  const heading2 = React.createElement(
    "h2",
    {
      id: "heading2",
    },
    "Heading 2"
  );
  console.log(heading);

  const container = React.createElement("div",{
    id:'container'
  },[heading,heading2])
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element into the root
  root.render(container);

  //Hot module reloading - HMR == works by file watchers algorithm - written in C++
  //PARCEL can do this
  //BUNDLING
  //MINIFYING
  //CLEANING OUR CODE
  //MANAGES DEV AND PRODUCTION BUILD
  //SUPERFAST BUILD ALGORITHM
  //Image optimizations 
  //caching while development
  //compatible with older versions
  //compressions
  //HTTPS ON DEV
  //PORT NUMBER
  //CONSISTENT HASHING ALGORITHM
  //zero configuration
  //


  //Transitive dependencies
  
