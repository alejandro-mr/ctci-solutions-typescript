import { describe, test, expect } from 'bun:test';
import isUnique from '../1_1-IsUnique';

describe('isUnique', () => {
  test('Returns `false` when there are duplicate characters', async () => {
    expect(isUnique('abcade')).toBeFalsy();
  });

  test('Return `true` when there are no duplicate characters', async () => {
    expect(isUnique('abcde^&')).toBeTruthy();
  });
});
