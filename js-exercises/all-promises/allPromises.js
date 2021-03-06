function allPromises(args) {
  const wrappedPromises = [];
  for (const item of args) {
    wrappedPromises.push(
      item instanceof Promise ? item : Promise.resolve(item),
    );
  }
  //   Having conflict between eslint max-len & implicit-arrow-linebreak rules
  /* eslint-disable max-len */
  const reducerFunction = (accumulator, promise) => accumulator.then((valueList) => promise.then((value) => {
    valueList.push(value);
    return valueList;
  }));
  return wrappedPromises.reduce(reducerFunction, Promise.resolve([]));
}

export { allPromises };
