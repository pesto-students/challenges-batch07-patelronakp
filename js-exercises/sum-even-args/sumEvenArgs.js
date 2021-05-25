const sumEvenArgs = (...args) => {
  let sumOfEvenNumber = 0;
  args.forEach((arg) => {
    if (arg % 2 === 0) {
      sumOfEvenNumber += arg;
    }
  });
  return sumOfEvenNumber;
};

export { sumEvenArgs };
