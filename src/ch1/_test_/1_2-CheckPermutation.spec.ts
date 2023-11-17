import { describe, test, expect } from 'bun:test';
import checkPermutation from '../1_2-CheckPermutation';

describe('checkPermutation', () => {
  test('Returns `true` when input strings are permutations', async () => {
    expect(checkPermutation('abc', 'bac')).toBeTrue();
  });

  test('Returns `false` when input strings are not permutations', async () => {
    expect(checkPermutation('aaaabcaa', 'aaaabccaaa')).toBeFalse();
  });
});
