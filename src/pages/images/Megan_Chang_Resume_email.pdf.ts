import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@data/site";

/**
 * The old site served the resume here, and Google still links to it. GitHub Pages can't
 * redirect, so this copies the current resume to the old address at build time.
 */
export const GET: APIRoute = async () => {
  const pdf = await readFile(join(process.cwd(), "public", site.resume));
  return new Response(pdf, { headers: { "Content-Type": "application/pdf" } });
};
