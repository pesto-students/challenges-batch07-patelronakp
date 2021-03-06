function debounce(callBackFun, waitingTime) {
  let intervalId = 0;
  function debouncFn(...args) {
    if (!intervalId) {
      intervalId = setTimeout(() => {
        if (!callBackFun) callBackFun.apply(this, args);
        intervalId = 0;
      }, waitingTime);
    }
  }
  debouncFn.cancel = () => {
    clearTimeout(intervalId);
  };
  return debouncFn;
}

export { debounce };
