function duplicateLetters(args) {
  const argsObjects = {};

  for (const char of args) {
    if (argsObjects[char]) {
      argsObjects[char] += 1;
    } else {
      argsObjects[char] = 1;
    }
  }

  const arrValues = Object.values(argsObjects);
  const maxValue = Math.max(...arrValues);
  if (maxValue === 1) return false;
  return maxValue;
}

export { duplicateLetters };
