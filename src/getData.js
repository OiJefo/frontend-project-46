import * as path from "path";
import { readFileSync } from "node:fs";
import parse from "./parser.js";

const getPath = (way) =>
  // eslint-disable-next-line no-undef
  way.startsWith("/") ? String(way) : String(path.resolve(process.cwd(), way));
const getExtension = (filepath) => path.extname(filepath).toLowerCase();
const readFile = (filepath) => readFileSync(filepath, "utf-8");
const getData = (filePath) =>
  parse(readFile(getPath(filePath)), getExtension(filePath));

export default getData;
