function chunkArrayInGroups(array, chunkSize) {
  return Array.from({ length: Math.ceil(array.length / chunkSize) },
    (v, i) => array.slice(i * chunkSize, i * chunkSize + chunkSize));
}

export {
  chunkArrayInGroups,
};
