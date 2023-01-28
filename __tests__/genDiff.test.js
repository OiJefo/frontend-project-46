import { test, expect } from '@jest/globals';
import genDiff from '../index';

test('genDiff', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toBe(3);
});
