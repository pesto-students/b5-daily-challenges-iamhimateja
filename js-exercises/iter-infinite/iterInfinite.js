function isIterable(input) {
  if (typeof input[Symbol.iterator] === 'undefined') {
    throw new TypeError(`${typeof input} is not an iterator.`);
  }
}

function checkInvalidInputs(...inputs) {
  for (const input of inputs) {
    if (Number.isNaN(Number(input)) || input === null) {
      throw new TypeError(`expected a number, instead received ${typeof input}`);
    }
  }
}

function* count(start, numberOfIterations = 100, step = 1) {
  checkInvalidInputs(start, numberOfIterations, step);
  let countFrom = start;
  let iterationCondition = numberOfIterations || true;
  while (iterationCondition) {
    yield countFrom;
    countFrom += step;
    if (typeof iterationCondition === 'number') iterationCondition -= 1;
  }
}

function* cycle(iterator, numberOfIterations) {
  isIterable(iterator);
  checkInvalidInputs(numberOfIterations);
  let iterationCondition = numberOfIterations || true;
  while (iterationCondition) {
    for (const element of iterator) {
      yield element;
    }
    if (typeof iterationCondition === 'number') iterationCondition -= 1;
  }
}

function* repeat(value, numberOfIterations) {
  checkInvalidInputs(numberOfIterations);
  let iterationCondition = numberOfIterations || true;
  while (iterationCondition) {
    yield value;
    if (typeof iterationCondition === 'number') iterationCondition -= 1;
  }
}

export {
  count,
  cycle,
  repeat,
};
