import { describe, test, expect } from 'bun:test';
import palindromePermutation from '../1_4-PalindromePermutation';

describe('palindromePermutation', () => {
  test("Should return true if it's valid permutation palindrome", async () => {
    expect(palindromePermutation('tact Coa')).toBeTrue();
  });

  test("Should return false since it's not a valid permutation", async () => {
    expect(palindromePermutation('abcdba')).toBeFalse();
  });

  test('Should return true on empty string', () => {
    expect(palindromePermutation('')).toBeTrue();
  });

  test('Should return true on all spaces string', () => {
    expect(palindromePermutation('       ')).toBeTrue();
  });
});
