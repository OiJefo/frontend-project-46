#!/usr/bin/env node
import { readFileSync } from "node:fs";
import _ from "lodash";

const genDiff = (filepath1, filepath2) => {
  const data1 = readFileSync(filepath1, "utf-8");
  const data2 = readFileSync(filepath2, "utf-8");
  const content1 = JSON.parse(data1);
  const content2 = JSON.parse(data2);

  const keys1 = _.keys(content1);
  const keys2 = _.keys(content2);
  const keys = _.union(keys1, keys2).sort();

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
  const result = keys.reduce(cb, []).join('\n');
  return `{\n${result}\n}`
};

// path.resolve(path);
// process.cwd()

export default genDiff;
