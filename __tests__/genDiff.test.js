import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import * as path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const first = getFixturePath('file1.json');
const second = getFixturePath('file2.json');
const expected = `{
  + follow: false
    host: hexlet.io
  + proxy: 123.234.53.22
  - timeout: 20
  + timeout: 50
  - verbose: true
}`;

const cases = [[first, second, expected]];

// eslint-disable-next-line no-undef
describe('genDiff example', () => {
  test.each(cases)(
    'given %p and %p as arguments, returns %p',
    (firstArg, secondArg, expectedResult) => {
      const result = genDiff(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    },
  );
});
