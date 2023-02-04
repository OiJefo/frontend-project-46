#!/usr/bin/env node
import getData from "./getData.js";
import getDiff from "./getDiff.js";
import getFormat from "./getFormat.js"

const genDiff = (filePath1, filePath2, format = "stylish") => {
  const data1 = getData(filePath1);
  const data2 = getData(filePath2);
  return getFormat(getDiff(data1, data2), format);
};

export default genDiff;
