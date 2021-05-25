function balancedBraces(args) {
  const brackets = '[]{}()';
  const stack = [];

  for (const bracket of args) {
    const bracketsIndex = brackets.indexOf(bracket);
    if (bracketsIndex !== -1) {
      if (bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1);
      } else if (stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

export {
  balancedBraces,
};
