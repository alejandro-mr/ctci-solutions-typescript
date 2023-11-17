const stringCompression = (input: string): string => {
  if (!input.trim()) return '';

  let prev = '';
  let counter = 0;
  let output = '';

  /* Complexity of O(n) where n is the lenght of input string, constant space.
   *
   * Note: spaces inside the sentence are considered part of it and compressed.
   */
  for (let char of input) {
    if (prev !== char) {
      output += counter > 0 ? counter + char : char;
      prev = char;
      counter = 1;

      continue;
    }

    counter += 1;
  }

  output += counter;

  return input.length <= output.length ? input : output;
};

export default stringCompression;
export { stringCompression };
