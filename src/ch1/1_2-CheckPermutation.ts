const checkPermutation = (a: string, b: string): boolean => {
  /* Using hashmap to track all char and amount from input `a`
   * and comparing against char in `b`
   */

  const charsA: Map<string, number> = new Map();
  for (const char of a) {
    charsA.set(char, (charsA.get(char) || 0) + 1);
  }

  for (const char of b) {
    if (!charsA.has(char)) return false;

    charsA.set(char, (charsA.get(char) || 0) - 1);
  }

  /* Check that all characters are down to 0, meaning we have the
   * same amount of characters in both string.
   */
  for (const count of charsA.values()) {
    if (count !== 0) return false;
  }

  return true;
};

export default checkPermutation;
export { checkPermutation };
