import React from 'react';
import './Footer.css';
import stamp from "../../assets/STAMP.png"

function Footer() {
  return (
    <div className='footer-container'>

      <div className='accountDetails'>
        <div className='account-section'>
          <div className='label'>Account Holder Name:</div>
          <div className='value'><input placeholder='ABC ENTERPISES'></input></div>
        </div>
        <div className='account-section'>
          <div className='label'>Bank Account Number:</div>
          <div className='value'><input placeholder='24732504842'></input></div>
        </div>
        <div className='account-section'>
          <div className='label'>Bank IFSC Code:</div>
          <div className='value'><input placeholder='ICIC0233477'></input></div>
        </div>
        <div className='account-section'>
          <div className='label'>Bank Name:</div>
          <div className='value'><input placeholder='ICICI BANK'></input></div>
        </div>
        <div className='account-section'>
          <div className='label'>Bank Branch Name:</div>
          <div className='value'><input placeholder='Mayapuri NEW DELHI'></input></div>
        </div>
        <div className='terms'>
          <h3>Terms and Conditions</h3>
          <ol>
            <li>This is electronic generated quotation.</li>
            <li>All disputes are subject to NEW DELHI jurisdiction. </li>
            <li>100% Payment against PI. </li>
          </ol>

        </div>

      </div>
      
      <div className='stamp'>
        <p>Certified that the particular given above are true and correct</p>
        <h2><input placeholder='For, ABC ENTERPRISES'></input></h2>
        <p>Authorized Signatory</p>
      </div>
    </div>
  );
}

export default Footer;
