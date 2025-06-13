import { useState, useEffect } from "react";

const PDFVisualizer = ({ pdfRoute }) => {
  const [exists, setExists] = useState(null);

  useEffect(() => {
    const checkPdf = async () => {
      try {
        const res = await fetch(pdfRoute, { method: "HEAD" });
        if (res.ok) {
          setExists(true);
        } else {
          setExists(false);
        }
      } catch (err) {
        setExists(false);
      }
    };

    checkPdf();
  }, [pdfRoute]);

  if (exists === null) {
    return <div>Cargando...</div>;
  }

  return exists ? (
    <iframe src={pdfRoute} width="100%" height="100%" className="rounded-2xl" />
  ) : (
    <div className="p-4 bg-red-100 text-red-800 rounded-2xl">
      No se encontró el documento. Por favor, contáctese con su administrador.
    </div>
  );
};

export default PDFVisualizer;
