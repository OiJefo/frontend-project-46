// import { readFileSync } from 'node:fs';
import path from 'path';
import fs from 'fs';
// eslint-disable-next-line import/extensions
import getDiff from './getDiff.js';
// eslint-disable-next-line import/extensions
import parser from './parser.js';
// eslint-disable-next-line import/extensions
import getFormat from './getFormat.js';

// // eslint-disable-next-line no-undef
// const getPath = (way) => path.resolve(process.cwd(), way);
// const getExtension = (filepath) => path.extname(filepath).toLowerCase();

// const genDiff = (filepath1, filepath2, format = 'stylish') => {
//   const data1 = parser(readFileSync(getPath(filepath1), 'utf-8'), getExtension(filepath1));
//   const data2 = parser(readFileSync(getPath(filepath2), 'utf-8'), getExtension(filepath2));
//   return getFormat(getDiff(data1, data2), format);
// };

// export default genDiff;

const getPath = (way) => path.resolve(process.cwd(), way);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const absolutePath1 = getPath(filepath1);
  const absolutePath2 = getPath(filepath2);

  const content1 = fs.readFileSync(absolutePath1, 'utf-8');
  const content2 = fs.readFileSync(absolutePath2, 'utf-8');

  const obj1 = parser(content1, filepath1.split('.').reverse()[0]);
  const obj2 = parser(content2, filepath2.split('.').reverse()[0]);

  const differences = getFormat(getDiff(obj1, obj2), formatName);
  return differences;
};

export default genDiff;