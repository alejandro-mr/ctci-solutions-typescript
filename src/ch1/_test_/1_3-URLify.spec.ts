import { describe, test, expect } from 'bun:test';
import URLify from '../1_3-URLify';

describe('URLify', () => {
  test('Should replace all space characters with `%20`', async () => {
    expect(URLify('a b c')).toBe('a%20b%20c');
  });

  test('Should return empty string', async () => {
    expect(URLify('      ')).toBe('');
  });
});
