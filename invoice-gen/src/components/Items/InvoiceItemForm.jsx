import React, { useState, useEffect } from "react";
import "./InvoiceItemForm.css";

function InvoiceItemForm({ onAddItem }) {
  const [items, setItems] = useState([
    { sno: "1", productName: "", qty: "",unit:"Nos.", rate: "", gst: "", total: "" },
  ]);

  const [totals, setTotals] = useState({
    totalTaxable: 0,
    totalGSTAmt: 0,
    overallTotal: 0,
  });

  useEffect(() => {
    updateTotals();
  }, [items]);

  const handleAddItem = () => {
    const lastSno =
      items.length > 0 ? parseInt(items[items.length - 1].sno) + 1 : 1;
    setItems([
      ...items,
      {
        sno: lastSno.toString(),
        productName: "",
        qty: "",
        rate: "",
        gst: "",
        total: "",
        unit: "Nos."
      },
    ]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;

    // Calculate TaxableValue
    const qty = parseFloat(updatedItems[index].qty);
    const rate = parseFloat(updatedItems[index].rate);
    updatedItems[index].taxable = (qty * rate).toFixed(2);

    // Calculate GST Amt
    const gstPercent = parseFloat(updatedItems[index].gst);
    updatedItems[index].gstAmt = (
      (gstPercent / 100) *
      updatedItems[index].taxable
    ).toFixed(2);

    // Calculate Total
    updatedItems[index].total = (
      parseFloat(updatedItems[index].taxable) +
      parseFloat(updatedItems[index].gstAmt)
    ).toFixed(2);

    setItems(updatedItems);
  };

  const updateTotals = () => {
    let totalTaxable = 0;
    let totalGSTAmt = 0;
    let overallTotal = 0;

    items.forEach((item) => {
      totalTaxable += parseFloat(item.taxable);
      totalGSTAmt += parseFloat(item.gstAmt);
      overallTotal += parseFloat(item.total);
    });

    setTotals({
      totalTaxable: totalTaxable.toFixed(2),
      totalGSTAmt: totalGSTAmt.toFixed(2),
      overallTotal: overallTotal.toFixed(2),
    });
  };

  return (
    <div>
      <form className="InvoiceItemForm">
        <table>
          <thead>
            <tr>
              <th>SNO</th>
              <th>Product Name</th>
              <th>HSN</th>
              <th>Qty</th>
              <th>Unit</th>
              <th>Rate</th>
              <th>Taxable Value</th>
              <th>GST %</th>
              <th>GST Amt</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.sno}</td>
                <td>
                  <input
                    type="text"
                    className="productNamee"
                    name="productName"
                    value={item.productName}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Enter Product Name"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name={`hsn-${index}`}
                    value={item.hsn}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="HSN"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="qty"
                    value={item.qty}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Qty"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="unit"
                    value={item.unit}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Unit"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="rate"
                    value={item.rate}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Rate"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="taxable"
                    name="taxable"
                    value={item.taxable}
                    readOnly
                    placeholder="Taxable"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="gst"
                    value={item.gst}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="GST %"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="gstAmt"
                    name="gstAmt"
                    value={item.gstAmt}
                    readOnly
                    placeholder="GST Amt"
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    className="total"
                    name="total"
                    value={item.total}
                    readOnly
                    placeholder="Total"
                  />
                </td>
                <td>
                  <button type="button" onClick={() => handleRemoveItem(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
      </form>
      <div className="totals-container">

        <div className="alphaTotal">
            <div className="headtot">Total Proforma Invoice Amount In Words</div>
            <input className="alpha_text" type="text"></input>
        </div>


        <table className="totals">
          <thead>
            <tr>
              <th>Total Taxable</th>
              <th>Total GST Amount</th>
              <th>Overall Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`₹${totals.totalTaxable}`}</td>
              <td>{`₹${totals.totalGSTAmt}`}</td>
              <td>{`₹${totals.overallTotal}`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InvoiceItemForm;
