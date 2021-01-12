const allPromises = args => {
  if (args === undefined) return Promise.resolve();

  const argumentsList = [];

  // eslint-disable-next-line guard-for-in
  for (const index in args) {
    const element = args[index];
    if (element instanceof Promise) {
      element.then(result => {
        (argumentsList[index] = result);
      });
    } else {
      argumentsList[index] = element;
    }
  }
  return new Promise((resolve) => resolve(argumentsList));
};

export { allPromises };
