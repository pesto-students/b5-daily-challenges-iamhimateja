const getDescriptorData = (object, key) => Object.getOwnPropertyDescriptor(object, key);
const isObject = input => (typeof input) === 'object';

const deepCopyObject = objToCopy => {
  if (typeof objToCopy === 'undefined') {
    throw new TypeError(`expected object, got ${typeof objToCopy}, For Example. {a: 1, b: 2}`);
  }
  if (isObject(objToCopy) && (objToCopy !== null)) {
    const deepCopiedObject = {};
    for (const [key, value] of Object.entries(objToCopy)) {
      if (isObject(objToCopy[key])) {
        deepCopiedObject[key] = deepCopyObject(objToCopy[key]);
      } else {
        Object.defineProperty(deepCopiedObject, key, getDescriptorData(objToCopy, key));
      }
    }
    return deepCopiedObject;
  } else {
    return objToCopy;
  }
};

export { deepCopyObject };
