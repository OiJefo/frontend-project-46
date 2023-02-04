#!/usr/bin/env node
import getData from "./getData";
import getDiff from "./getDiff";
import getFormat from "./getFormat"

const genDiff = (filePath1, filePath2, format = "stylish") => {
  const data1 = getData(filePath1);
  const data2 = getData(filePath2);
  return getFormat(getDiff(data1, data2), format);
};

export default genDiff;
