function dropElements(elements, predicate) {
  return elements.filter(x => predicate(x));
}

export { dropElements };
