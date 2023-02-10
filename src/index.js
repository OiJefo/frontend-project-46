import { readFileSync } from 'node:fs';
import path from 'path';
import getDiff from './getDiff.js';
import parser from './parser.js';
import getFormat from '..display/getFormat.js';

// eslint-disable-next-line no-undef
const getPath = (way) => path.resolve(process.cwd(), way);
const getExtension = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parser(readFileSync(getPath(filepath1), 'utf-8'), getExtension(filepath1));
  const data2 = parser(readFileSync(getPath(filepath2), 'utf-8'), getExtension(filepath2));
  return getFormat(getDiff(data1, data2), format);
};

export default genDiff;
