import React from 'react'
import "./Date.css"

function Date() {
  return (
    <>
    <div className='h1'>
        <h1>Proforma Invoice</h1>
    </div>
    <div className='btstContainer'>
        <div className='billedTo'>
            <label>Invoice No.</label>
            <input type='number'></input><br/>
            <label>Invoice Date</label>
            <input type='date'></input><br/>
            <label>State</label>
            <input type='text'></input><br/>
            <label>State Code</label>
            <input type='number'></input>
        </div>
        <div className='shippedTo'>
            <label>Ship To</label>
            <input type='text'></input><br/>
            <label>Transporter</label>
            <input type='text'></input><br/>
            <label>Date of supply</label>
            <input type='date'></input><br/>
            <label>Place of supply</label>
            <input type='text'></input>
        </div>
    </div>
    </>
  )
}

export default Date