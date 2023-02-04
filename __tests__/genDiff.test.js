import { test, expect } from "@jest/globals";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "url";
import genDiff from "../src/index.js";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);

const readFile = (file) => {
  const filePath = getFixturePath(file);
  const content = readFileSync(filePath, "utf-8");
  return content;
};

const firstJSON = getFixturePath("file1.json");
const secondJSON = getFixturePath("file2.json");
const firstYML = getFixturePath("file1.yml");
const secondYML = getFixturePath("file2.yml");
const resultStylish = readFile("resultStylish.txt");
const resultPlain = readFile("resultPlain.txt");
const resultJSON = readFile("resultJSON.txt");

const cases = [
  [firstJSON, secondJSON, "stylish", resultStylish],
  [firstYML, secondYML, "stylish", resultStylish],
  [firstJSON, secondJSON, "plain", resultPlain],
  [firstYML, secondYML, "stylish", resultStylish],
  [firstYML, secondYML, "json", resultJSON],
];

// eslint-disable-next-line no-undef
describe("genDiff example", () => {
  test.each(cases)(
    "Comparing %p with %p styled %p",
    (first, second, style, expected) => {
      const result = genDiff(first, second, style);
      expect(result).toEqual(expected);
    }
  );
});
