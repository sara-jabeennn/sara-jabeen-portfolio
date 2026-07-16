import fs from "node:fs";
import path from "node:path";

// The intended path once the real PDF exists. Wired but gated: the Download
// CV button only ever links here if the file is actually present in
// public/resume/ at build/request time - never a fake/placeholder link.
export const RESUME_PATH = "/resume/Sara_Jabeen_CV.pdf";

export function getResumeUrl(): string | undefined {
  const filePath = path.join(process.cwd(), "public", "resume", "Sara_Jabeen_CV.pdf");
  return fs.existsSync(filePath) ? RESUME_PATH : undefined;
}
