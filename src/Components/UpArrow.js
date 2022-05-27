import React from "react";
import './Arrow.css';
import arrowUp from "./../Images/upArrow.svg";
function UpArrow(props) {

  return (
    <div className="Arrow ArrowStart" minWidth="40px" width="50px" maxWidth="60px" onClick={e => window.scrollBy(0, -800)}>
    <img src={arrowUp}  width="50px" height="auto"/>
  </div>
  );
}
export default UpArrow;
