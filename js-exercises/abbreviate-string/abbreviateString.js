function abbreviateString(str) {
  const arrStr = str.split(' ');
  if (arrStr.length > 1) {
    return `${arrStr[0]} ${arrStr[arrStr.length - 1].charAt(0).toUpperCase()}.`;
  }
  return arrStr[0];
}
export { abbreviateString };
