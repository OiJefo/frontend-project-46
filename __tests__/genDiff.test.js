// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from '@jest/globals';
import { readFileSync } from 'node:fs';
import genDiff from '../index';

const data1 = readFileSync('../__fixtures__/file1.json', 'utf-8');
const data2 = readFileSync('../__fixtures__/file2.json', 'utf-8');
const data3 = readFileSync('../__fixtures__/expectedfile.txt', 'utf-8');

const content1 = JSON.parse(data1);
const content2 = JSON.parse(data2);
const content3 = JSON.parse(data3);

const cases = [[content1, content2, content3]];

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
