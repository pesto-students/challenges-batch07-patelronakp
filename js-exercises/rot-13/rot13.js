function rot13(args) {
  const output = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const input = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let decodedString = '';
  const lengthOfArgs = args.length;
  for (let i = 0; i < lengthOfArgs; i += 1) {
    const index = input.indexOf(args[i]);
    if (index !== -1) {
      decodedString += output[index];
    } else {
      decodedString += args[i];
    }
  }
  return decodedString;
}

export {
  rot13,
};
