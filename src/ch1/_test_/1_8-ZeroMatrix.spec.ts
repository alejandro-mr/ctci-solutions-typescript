import { describe, test, expect } from 'bun:test';
import zeroMatrix from '../1_8-ZeroMatrix';

describe('zeroMatrix', () => {
  test('Returns empty array if size is not M x N', async () => {
    const MATRIX = [
      [1, 2, 3],
      [1, 2],
      [1, 2, 3],
    ];
    expect(zeroMatrix(MATRIX)).toEqual([]);
  });

  test('Returns empty array if first column is empty', async () => {
    const MATRIX = [[], [1, 2, 3], [1, 2, 3]];
    expect(zeroMatrix(MATRIX)).toEqual([]);
  });

  test('Returns empty array if no rows are present (array is empty)', async () => {
    const MATRIX: Array<Array<number>> = [];
    expect(zeroMatrix(MATRIX)).toEqual([]);
  });

  test('Returns original array if no zeros are present', async () => {
    const MATRIX = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];

    expect(zeroMatrix(MATRIX)).toEqual(MATRIX);
  });

  test('Returns columns and rows set to 0s if original array contains 0 in [row, column] position', async () => {
    const MATRIX = [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 0, 4, 5],
      [1, 2, 3, 4, 5],
    ];

    const EXPECTED_MATRIX = [
      [1, 2, 0, 4, 5],
      [1, 2, 0, 4, 5],
      [0, 0, 0, 0, 0],
      [1, 2, 0, 4, 5],
    ];

    expect(zeroMatrix(MATRIX)).toEqual(EXPECTED_MATRIX);
  });
});
