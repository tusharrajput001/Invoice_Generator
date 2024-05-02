import React from "react";
import "./Head.css"

function Head() {
  return (
    <div className="head-part">
      <h2><input className="head-inp" placeholder="ABC ENTERPRISES"></input></h2>
      <p><input className="head-inp" placeholder="E-21/22 PHASE 1 "></input></p>
      <p><input className="head-inp" placeholder="West Janakpuri"></input></p>
      <p><input className="head-inp" placeholder="NEW DELHI - 110054"></input></p>
      <p><input className="head-inp" placeholder="95655XXXXX"></input></p>
      <a><input className="head-inp" placeholder="abc@gmail.com"></input></a>
      <p><input className="head-inp gst-inp" placeholder="GSTIN: 65AG46E2W4FG1DA"></input></p>
    </div>
  );
}

export default Head;
