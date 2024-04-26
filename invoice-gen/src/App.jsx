import Head from "./components/Head/Head";
import "./index.css";
import Date from "./components/Datepart/Date";
import Btst from "./components/BtStpart/Btst";
import InvoiceItemForm from "./components/Items/InvoiceItemForm";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {

  const[loader,setLoader] = useState(false);

  const downloadPDF = ()=>{
    const capture = document.querySelector("#invoice");
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF('p', 'mm', 'a4');
      const componenetWidth = doc.internal.pageSize.getWidth();
      const componenetHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componenetWidth, componenetHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })


  }


  return (
    <>
      <button className="download-btn" id="download" disabled={!(loader === false)} onClick={downloadPDF} >
        {loader?(<span>Downloading</span>):(<span>Download</span>)}
      </button>
      <div className="container" id="invoice">
        <Head />
        <Date />
        <Btst />
        <InvoiceItemForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
