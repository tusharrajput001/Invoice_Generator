import React from "react";
import "./Btst.css";

function Btst() {
  return (
    <>
      <div className="btst-head">
        <h3 className="btHead">Details of Receiver | Billed To:</h3>
        <h3 className="stHead">Details of Consignee | Shipped To:</h3>
      </div>
      <div className="btstContainer">
        <div className="billedTo">
          <label>Name</label>
          <input type="text"></input>
          <br />
          <label>Address</label>
          <input type="text"></input>
          <br />
          <label>GSTIN</label>
          <input type="text"></input>
          <br />
          <label>State Code</label>
          <input type="number"></input>
        </div>
        <div className="shippedTo">
          <label>Name</label>
          <input type="text"></input>
          <br />
          <label>Address</label>
          <input type="text"></input>
          <br />
          <label>GSTIN</label>
          <input type="text"></input>
          <br />
          <label>State Code</label>
          <input type="number"></input>
        </div>
      </div>
    </>
  );
}

export default Btst;
