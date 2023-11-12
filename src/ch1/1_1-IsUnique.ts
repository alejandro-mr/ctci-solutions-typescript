/*
 * Input limited to 95 Unicode chars, running from ` `(space) to `z`
 * this includes all basic latin characters. Even though there is no
 * limit implemented at code level, solution should work even for chars
 * beyond `z`.
 */
const isUnique = (input: string): boolean => {
  // hashmap implementation
  /* Using a Set we can have one record for each available char,
     if one is already present we return false.
   */
  const CHARS: Set<string> = new Set();

  for (const char of input) {
    if (CHARS.has(char)) return false;
    CHARS.add(char);
  }
  return true;
};

export default isUnique;
export { isUnique };
