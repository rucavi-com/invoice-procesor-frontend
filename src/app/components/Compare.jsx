"use client";

import Dropdown from "./Dropdown";
import PDFVisualizer from "./PdfVisualizer";
import { useState } from "react";

const Compare = ({ bills }) => {
  const [selectedBill, setSelectedBill] = useState();

  return (
    <div className="w-fit mx-auto py-8">
      <Dropdown name={"Facturas"} list={bills} onSelect={setSelectedBill} />
      <div className="my-3 flex gap-[1vw]">
        <div className="h-[80vh] w-[48vw] border-white border rounded-2xl overflow-hidden">
          <PDFVisualizer pdfRoute={"/" + selectedBill} />
        </div>
        <form className="h-[80vh] w-[48vw] border-white border rounded-2xl"></form>
      </div>
    </div>
  );
};

export default Compare;
