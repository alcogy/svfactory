import type { RequestHandler } from "./$types";
import { readfiles } from "$lib/files";
import * as fs from 'fs';
import { error } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json();
  if (!fs.existsSync(body.path)) error(500);
  let files = readfiles(body.path);
  return new Response(JSON.stringify(files));
}