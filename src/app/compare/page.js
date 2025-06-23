import fs from "fs";
import path from "path";
import Compare from "../components/Compare";
import SidebarMenu from "../components/SidebarMenu";

export default async function ComparePage() {
  const dir = path.join(process.cwd(), "public");
  const files = fs.readdirSync(dir);
  const pdfFiles = files.filter((file) => file.endsWith(".pdf"));

  return (
    <>
      <div className="w-dvw h-dvh bg-[#e5e7eb]">
        <div className="flex justify-between py-2 px-[2vw] items-center">
          <div className="flex items-center gap-5">
            <SidebarMenu files={pdfFiles}></SidebarMenu>
            <h1 className="text-2xl font-semibold text-gray-900">
              Corrección de facturas
            </h1>
          </div>
          <p className="text-sm text-gray-600">
            Hay {pdfFiles.length} facturas pendientes
          </p>
        </div>
        <Compare bills={pdfFiles} />
      </div>
    </>
  );
}
