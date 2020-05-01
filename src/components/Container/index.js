import React from "react";

function Container(props) {
  // return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
  return <div className="container mt-2 mb-2 p-5 shadow-lg" {...props} />;

}

export default Container;
