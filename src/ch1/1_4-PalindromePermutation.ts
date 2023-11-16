const palindromePermutation = (input: string): boolean => {
  const charCount: Map<string, number> = new Map();

  /* Takes O(n) to count all chars
   * and it creates a O(n) extra space hashmap.
   */
  for (const char of input) {
    if (char !== ' ') {
      charCount.set(char.toLowerCase(), (charCount.get(char.toLowerCase()) || 0) + 1);
    }
  }

  /* O(n) time to check the count on each character. */
  let oneUnique = '';
  for (const [char, count] of charCount) {
    if (count === 1 || count % 2 > 0) {
      if (oneUnique) {
        return false;
      } else {
        oneUnique = char;
        charCount.delete(char);
      }
    }
  }

  return true;
};

export default palindromePermutation;
export { palindromePermutation };
