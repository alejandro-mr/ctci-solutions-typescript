const URLify = (input: string): string => {
  /*
   * JS has immutable string, it's not posible to do modifications in place,
   * instead I'm turning it into an array.
   */
  let chars: Array<string> = input.trim().split('');

  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] === ' ') {
      /* splice does a in place modification of the array
       * assuming the max complexity of creating a new array it's O(n)
       * plus iterating every element of the input string O(s)
       * if all chars were allowed to be spaces, the max complexity will be O(s * n)
       */
      chars.splice(i, 1, '%', '2', '0');
    }
  }

  return chars.join('');
};

export default URLify;
export { URLify };
