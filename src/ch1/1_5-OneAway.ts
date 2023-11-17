const oneAway = (origin: string, target: string): boolean => {
  let sizeDiff = Math.abs(origin.length - target.length);
  if (sizeDiff > 1) {
    return false;
  }

  let editDistance = 0;

  const originChars: Map<string, number> = new Map();
  for (let char of origin) {
    originChars.set(char, (originChars.get(char) || 0) + 1);
  }

  for (let char of target) {
    if (!originChars.has(char)) {
      editDistance += 1;
    } else {
      let updatedCount = (originChars.get(char) || 0) - 1;
      originChars.set(char, updatedCount);

      if (updatedCount < 0) {
        editDistance += 1;
      }
    }
  }

  return editDistance <= 1;
};

export default oneAway;
export { oneAway };
