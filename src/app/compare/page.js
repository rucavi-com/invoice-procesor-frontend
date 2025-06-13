import fs from "fs";
import path from "path";
import Compare from "../components/Compare";

export default async function ComparePage() {
  const dir = path.join(process.cwd(), "public");
  const files = fs.readdirSync(dir);
  const pdfFiles = files.filter((file) => file.endsWith(".pdf"));

  return (
    <div className="w-dvw h-dvh bg-[linear-gradient(to_bottom,_#fcd34d_0%,_#000000_10%,_#000000_100%)]">
      <Compare bills={pdfFiles} />
    </div>
  );
}
