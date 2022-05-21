import React from "react";
import './Arrow.css';
import arrowDown from "./../Images/downArrow.svg";
function DownArrow(props) {

  return (
    <div className="Arrow ArrowEnd"  minWidth="40px" width="50px" maxWidth="60px" onClick={e => window.scrollBy(0, 800)}>
    <img class={props.name} src={arrowDown}  width="50px" height="auto"/>
  </div>
  );
}
export default DownArrow;
