import { describe, test, expect } from 'bun:test';
import stringCompression from '../1_6-StringCompression';

describe('StringCompression', () => {
  test('Must return compressed string `a2b1c5a3` for input `aabcccccaaa`', async () => {
    expect(stringCompression('aabcccccaaa')).toEqual('a2b1c5a3');
  });

  test('Must return original string `abcccc` when compressed string is not smaller', async () => {
    expect(stringCompression('abcccc')).toEqual('abcccc');
  });

  test('Returns empty string when input is an empty string', async () => {
    expect(stringCompression('')).toEqual('');
  });
});
