/*
 * Input limited to 95 Unicode chars, running from ` `(space) to `z`
 * this includes all basic latin characters. Even though there is no
 * limit implemented at code level, solution should work even for chars
 * beyond `z`.
 */
const isUnique = (input: string): boolean => {
  /* Solution without extra data structure, using sorting
     and looking for a repeated char.
   */
  const sortedString: Array<string> = input.split('').sort();

  let prev: string = '';
  for (const char of sortedString) {
    if (prev === char) return false;
    prev = char;
  }
  return true;
};

export default isUnique;
export { isUnique };
