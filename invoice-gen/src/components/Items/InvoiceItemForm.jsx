import React, { useState } from "react";
import "./InvoiceItemForm.css";

function InvoiceItemForm({ onAddItem }) {
  const [items, setItems] = useState([
    { sno: "1", productName: "", qty: "", rate: "", gst: "", total: "" },
  ]);

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

  return (
    <div>
      <form className="InvoiceItemForm">
        <div className="Invoice-heading">
          <label className="label-sno">SNO</label>
          <label className="label-product">Product Name</label>
          <label className="label-hsn">HSN</label>
          <label className="label-qty">Qty</label>
          <label className="label-unit">Unit</label>
          <label className="label-rate">Rate</label>
          <label className="label-taxable">TaxableValue</label>
          <label className="label-gst">GST%</label>
          <label className="label-gstAmt">GST Amt</label>
          <label className="label-total">Total</label>
        </div>
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              name="sno"
              value={item.sno}
              readOnly
              placeholder="Sno."
            />
            <input
              className="product-inp"
              type="text"
              name="productName"
              value={item.productName}
              onChange={(e) => handleChange(index, e)}
              placeholder="Enter Product Name"
            />
            <input
              type="text"
              className="hsn"
              name={`hsn-${index}`}
              value={item.hsn}
              onChange={(e) => handleChange(index, e)}
              placeholder="HSN"
            />
            <input
              type="number"
              name="qty"
              value={item.qty}
              onChange={(e) => handleChange(index, e)}
              placeholder="Qty"
            />
            <input
              type="text"
              name="unit"
              value={item.unit}
              onChange={(e) => handleChange(index, e)}
              placeholder="Unit"
            />
            <input
              type="number"
              className="rate"
              name="rate"
              value={item.rate}
              onChange={(e) => handleChange(index, e)}
              placeholder="Rate"
            />
            <input
              type="number"
              className="taxable"
              name="taxable"
              value={item.taxable}
              readOnly
              placeholder="Taxable"
            />
            <input
              type="number"
              name="gst"
              value={item.gst}
              onChange={(e) => handleChange(index, e)}
              placeholder="GST %"
            />
            <input
              type="number"
              className="gstAmt"
              name="gstAmt"
              value={item.gstAmt}
              readOnly
              placeholder="GST Amt"
            />
            <input
              type="number"
              className="total"
              name="total"
              value={item.total}
              readOnly
              placeholder="Total"
            />
            <button type="button" onClick={() => handleRemoveItem(index)}>
              -
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddItem}>
          +
        </button>
      </form>
    </div>
  );
}

export default InvoiceItemForm;
