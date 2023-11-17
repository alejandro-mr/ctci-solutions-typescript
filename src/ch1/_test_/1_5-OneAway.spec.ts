import { describe, test, expect } from 'bun:test';
import oneAway from '../1_5-OneAway';

describe('OneAway', () => {
  test('Must return false when edit distance is greater than 2', async () => {
    expect(oneAway('abc', 'abcdef')).toBeFalse();
  });

  test('Returns true if one character has been replaced', async () => {
    expect(oneAway('pale', 'ple')).toBeTrue();
  });

  test('Returns true if one character has been added', async () => {
    expect(oneAway('pale', 'pales')).toBeTrue();
  });

  test('Returns false if two characters have been removed', async () => {
    expect(oneAway('pale', 'pl')).toBeFalse();
  });
});
