function removeFalsyValues(array) {
  const newArr = array.filter((item) => {
    if (item) {
      return item;
    }
    return '';
  });
  return newArr;
}

export {
  removeFalsyValues,
};
