function cacheFunction(fun) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fun(...args);
    cache.set(key, result);
    return result;
  };

  // console.log(fun);
  // const cache = {};
  // return (n) => {
  //   if (cache[n] !== undefined) {
  //     return cache[n];
  //   }
  //   const result = fun(n);
  //   cache[n] = result;
  //   return result;
  // };
}

function sumFibs(value) {
  const cacheData = {};
  function fibonanci(num) {
    if (cacheData[num]) {
      return cacheData[num];
    }

    if (num <= 1) {
      return 1;
    }
    cacheData[num] = fibonanci(num - 1) + fibonanci(num - 2);
    return cacheData[num];
  }
  let total = 0;
  // const fibCacheFunction = cacheFunction(fibonanci); //used the cached function
  for (let i = 0; i < value; i += 1) {
    const retVal = fibonanci(i);
    if (retVal >= value) break;
    if (retVal % 2) {
      total += retVal;
    }
  }

  return total;
  // return num;
  // 1 1 2 3 5
}

export { sumFibs, cacheFunction };
