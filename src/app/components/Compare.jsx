"use client";

import PDFVisualizer from "./PdfVisualizer";
import { useState } from "react";

const Compare = ({}) => {
  const [selectedBill, setSelectedBill] = useState();

  return (
    <div className="w-fit mx-auto">
      <div className="flex gap-[1vw]">
        <div className="h-[80vh] w-[48vw] bg-white border-gray-300 border rounded-2xl overflow-hidden">
          <PDFVisualizer
            pdfRoute={
              selectedBill ? "/" + selectedBill : "/ALIANZA BELGRANO.pdf"
            }
          />
        </div>
        <form className="h-[80vh] w-[48vw] bg-white border-gray-300 border rounded-2xl"></form>
      </div>
    </div>
  );
};

export default Compare;
