import React from "react";
import "./styles/Frame.css";

function Frame(props) {
  return <div className="frameContainer"> {props.children} </div>;
}

export default Frame;
