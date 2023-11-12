const checkPermutation = (a: string, b: string): boolean => {
  /* Using sort and comparing chars between both strings.
   * No extra space needed, but complexity increased.
   */

  // Both string must have the same amount of chars to be a permutation.
  if (a.length !== b.length) return false;

  // O(a log a) + O(b log b) sorting each string
  const aSorted: Array<string> = a.split('').sort();
  const bSorted: Array<string> = b.split('').sort();

  // O(a)
  for (let i = 0; i <= aSorted.length; i++) {
    if (aSorted[i] !== bSorted[i]) return false;
  }

  return true;
};

export default checkPermutation;
export { checkPermutation };
