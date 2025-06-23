"use client";

import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { es } from "date-fns/locale";

export default function SidebarMenu({ files }) {
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
        <ul>
          {/* {files.map((file) => {
            const createdAt = file.timestamp;
            const tiempo = formatDistanceToNowStrict(createdAt, {
              unit: "hour",
              locale: es,
              roundingMethod: "floor",
            });

            return (
              <li
                key={file}
                className="p-4 rounded-md border border-gray-200 shadow hover:bg-gray-50 cursor-pointer"
              >
                <h3 className="font-semibold text-gray-800 text-sm">
                  {file.order_id}
                </h3>
                <p className="text-xs text-gray-500">
                  Fecha: {createdAt.toLocaleDateString("es-AR")}
                </p>
                <p className="text-xs text-gray-500">
                  Sin procesar hace: {tiempo}
                </p>
              </li>
            );
          })} */}
        </ul>
      </div>
    </>
  );
}
