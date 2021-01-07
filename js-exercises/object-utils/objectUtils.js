const isObject = input => (typeof input) === 'object';
const isArray = input => input.constructor === Array;

const getDescriptorData = (object, key) => Object.getOwnPropertyDescriptor(object, key);

const map = (object, functionCallback) => {
  if (!isObject(object)) {
    throw new TypeError(`got ${typeof object}, expected object, Ex. {a: 1, b: 2}`);
  }
  const callbackData = [];
  for (const keyValuePair of Object.entries(object)) {
    callbackData.push(functionCallback(keyValuePair));
  }
  return callbackData;
};

const filter = (object, functionCallback) => {
  if (!isObject(object)) {
    throw new TypeError(`got ${typeof object}, expected object, Ex. {a: 1, b: 2}`);
  }
  const callbackData = {};
  for (const keyValuePair of Object.entries(object)) {
    const [key, value] = keyValuePair;
    if (functionCallback(keyValuePair)) {
      Object.defineProperty(callbackData, key, getDescriptorData(object, key));
    }
  }
  return callbackData;
};

const invert = object => {
  if (!isObject(object)) {
    throw new TypeError(`got ${typeof object}, expected object, Ex. {a: 1, b: 2}`);
  }
  const invertedData = {};
  for (const [key, value] of Object.entries(object)) {
    invertedData[value] = key;
  }
  return invertedData;
};

const all = (array, conditionCallback) => {
  if (!isArray(array)) {
    throw new TypeError(`got ${typeof object}, expected Array, Ex. [1, 2, "a", "b", "c"]`);
  }
  for (const element of array) {
    if (!conditionCallback(element)) {
      return false;
    }
  }
  return true;
};

const some = (array, conditionCallback) => {
  if (!isArray(array)) {
    throw new TypeError(`got ${typeof object}, expected Array, Ex. [1, 2, "a", "b", "c"]`);
  }
  for (const element of array) {
    if (conditionCallback(element)) {
      return true;
    }
  }
  return false;
};

const merge = (baseObject, ...objects) => {
  if (!isObject(object)) {
    throw new TypeError(`got ${typeof object}, expected object, Ex. {a: 1, b: 2}`);
  }
  for (const object of objects) {
    for (const [key, value] of Object.entries(object)) {
      // if (baseObject.hasOwnProperty(key)) {
      // Still thinking to override or not.
      // } else {
      Object.defineProperty(baseObject, key, getDescriptorData(object, key));
      // }
    }
  }
  return baseObject;
};

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
