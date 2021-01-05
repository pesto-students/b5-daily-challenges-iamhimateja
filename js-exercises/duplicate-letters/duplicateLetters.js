function duplicateLetters(string) {
  const charecterCounterObject = {};
  for (const char of string) {
    if (charecterCounterObject[char]) {
      charecterCounterObject[char] += 1;
    } else {
      charecterCounterObject[char] = 1;
    }
  }
  const max = Math.max(...Object.values(charecterCounterObject));
  return max === 1 ? false : max;
}

export {
  duplicateLetters,
};
