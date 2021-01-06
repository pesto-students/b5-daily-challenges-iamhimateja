const alphabeticShift = string => {
  let shiftedString = '';
  for (const character of string) {
    shiftedString += String.fromCharCode(character.charCodeAt(0) + 1);
  }
  return shiftedString;
};

export { alphabeticShift };
