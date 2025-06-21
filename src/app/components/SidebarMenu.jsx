"use client";

import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 z-50 top-4 left-4 bg-white rounded-md shadow"
      >
        <Bars3Icon className="h-6 w-6 text-gray-700" />
      </button>

      {/* Menú deslizable */}
      <div
        className={`fixed left-0 w-[25vw] h-[calc(100vh-5vw)] top-[5vw] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg text-gray-900">Facturas</h2>
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </>
  );
}
