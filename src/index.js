#!/usr/bin/env node
import { readFileSync } from "node:fs";
import getPath from "./getPath.js";
import _ from "lodash";

const genDiff = (filepath1, filepath2) => {
  const absolutePath1 = getPath(String(filepath1));
  const absolutePath2 = getPath(String(filepath2));

  const data1 = readFileSync(absolutePath1, "utf-8");
  const data2 = readFileSync(absolutePath2, "utf-8");

  const content1 = JSON.parse(data1);
  const content2 = JSON.parse(data2);
  const keys = _.union(_.keys(content1), _.keys(content2)).sort();

  const cb = (acc, key) => {
    const minus = `- ${key}`;
    const plus = `+ ${key}`;
    const even = `  ${key}`;
    if (!Object.hasOwn(content2, key)) {
      acc.push(`  ${minus}: ${content1[key]}`);
    } else if (!Object.hasOwn(content1, key)) {
      acc.push(`  ${plus}: ${content2[key]}`);
    } else if (content1[key] !== content2[key]) {
      acc.push(`  ${minus}: ${content1[key]}`);
      acc.push(`  ${plus}: ${content2[key]}`);
    } else {
      acc.push(`  ${even}: ${content1[key]}`);
    }
    return acc;
  };
  const result = keys.reduce(cb, []).join("\n");
  return `{\n${result}\n}`;
};

export default genDiff;
