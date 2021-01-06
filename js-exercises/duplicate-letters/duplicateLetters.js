function duplicateLetters(string) {
  const characterCounterObject = {};
  for (const char of string) {
    if (characterCounterObject[char]) {
      characterCounterObject[char] += 1;
    } else {
      characterCounterObject[char] = 1;
    }
  }
  const max = Math.max(...Object.values(characterCounterObject));
  return max === 1 ? false : max;
}

export {
  duplicateLetters,
};
