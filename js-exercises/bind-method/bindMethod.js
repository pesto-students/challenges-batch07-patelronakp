// You can change the `args`
function bind(fun, args) {
  return function (newParam) {
    return fun.call(args, newParam);
  };
}

module.exports = { bind };
