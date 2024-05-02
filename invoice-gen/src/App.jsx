import React, { useRef } from 'react';

import { ReactToPrint } from 'react-to-print';
import PrintableContent from './components/PrintableContent';

function App() {
  const componentRef = useRef();

  return (
    <>
      <ReactToPrint
        trigger={() => <button>Print</button>}
        content={() => componentRef.current}
        documentTitle='Printable Content'
      />
      <div className="container">
        <PrintableContent ref={componentRef} />
      </div>
    </>
  );
}

export default App;
