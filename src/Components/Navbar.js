import "./Navbar.css";
import React from 'react'

function Navbar(props) {

  return (
    <div className="navbar">
      <ul>
        {props.item1}
        {props.item2}
        {props.item3}
      </ul>
      <div className="navline"></div>
    </div>
  );
}
export default Navbar;
