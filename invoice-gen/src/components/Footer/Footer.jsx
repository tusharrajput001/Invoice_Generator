import React from 'react';
import './Footer.css';
import stamp from "../../assets/STAMP.png"

function Footer() {
  return (
    <div className='footer-container'>

      <div className='accountDetails'>
        <div className='account-section'>
          <div className='label'>Account Holder Name:</div>
          <div className='value'>ATR ENTERPRISES</div>
        </div>
        <div className='account-section'>
          <div className='label'>Bank Account Number:</div>
          <div className='value'>347405000892</div>
        </div>
        <div className='account-section'>
          <div className='label'>Bank IFSC Code:</div>
          <div className='value'>ICIC0003474</div>
        </div>
        <div className='account-section'>
          <div className='label'>Bank Name:</div>
          <div className='value'>ICICI BANK</div>
        </div>
        <div className='account-section'>
          <div className='label'>Bank Branch Name:</div>
          <div className='value'>Mahipalpur NEW DELHI</div>
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
        <h2>For, ATR ENTERPRISES</h2>
        <img src={stamp} alt="stamp"></img>
        <p>Authorized Signatory</p>
      </div>
    </div>
  );
}

export default Footer;
