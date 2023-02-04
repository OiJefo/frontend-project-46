import fs from 'fs';
import path from 'path';
import getDiff from './getDiff.js';
import parser from './parser.js';
import getFormat from './getFormat.js';

// eslint-disable-next-line no-undef
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