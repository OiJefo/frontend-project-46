// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from '@jest/globals';
import genDiff from '../index';

const filepath1 = '__fixtures__/file1.json';
const filepath2 = '__fixtures__/file2.json';
const expected = '{\n  + follow: false\n  host: hexlet.io\n  + proxy: 123.234.53.22\n  - timeout: 20\n  + timeout: 50\n  - verbose: true\n}';
const cases = [[filepath1, filepath2, expected]];

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
