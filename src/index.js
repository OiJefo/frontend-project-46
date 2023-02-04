import { readFileSync } from 'node:fs';
import path from 'path';
// eslint-disable-next-line import/extensions
import getDiff from './getDiff.js';
// eslint-disable-next-line import/extensions
import parser from './parser.js';
// eslint-disable-next-line import/extensions
import getFormat from './getFormat.js';

// eslint-disable-next-line no-undef
const getPath = (way) => path.resolve(process.cwd(), way);
const getExtension = (filepath) => path.extname(filepath).toLowerCase();

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const content1 = readFileSync(getPath(filepath1), 'utf-8');
  const content2 = readFileSync(getPath(filepath2), 'utf-8');

  const data1 = parser(content1, getExtension(filepath1));
  const data2 = parser(content2, getExtension(filepath2));

  const differences = getFormat(getDiff(data1, data2), format);
  return differences;
};

export default genDiff;
