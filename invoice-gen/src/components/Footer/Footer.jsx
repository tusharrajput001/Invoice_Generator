import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='accountDetails'>
        <div className='account-section'>
          <div className='label'>Account Holder Name:</div>
          <div className='value'>ATRENTERPRISE</div>
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
      </div>
      <div className='stamp'></div>
    </div>
  );
}

export default Footer;
