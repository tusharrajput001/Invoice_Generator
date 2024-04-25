import { useState } from 'react'
import Head from './components/Head/Head'
import './index.css'
import Date from './components/Datepart/Date'
import Btst from './components/BtStpart/Btst'
import InvoiceItemForm from './components/Items/InvoiceItemForm'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Head/>
        <Date/>
        <Btst/>
        <InvoiceItemForm/>
        <Footer/>
      </div>
    </>
  )
}

export default App
