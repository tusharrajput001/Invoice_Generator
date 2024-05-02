import React, { forwardRef } from 'react';
import Head from "../components/Head/Head"; 
import Date from "../components/Datepart/Date";
import Btst from "../components/BtStpart/Btst";
import InvoiceItemForm from "../components/Items/InvoiceItemForm";
import Footer from "../components/Footer/Footer";
import '../index.css';

const PrintableContent = forwardRef((props, ref) => (
  <div className="printable-content" ref={ref}>
    <Head />
    <Date />
    <Btst />
    <InvoiceItemForm />
    <Footer />
  </div>
));

export default PrintableContent;
