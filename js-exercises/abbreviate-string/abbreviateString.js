const isString = (string) => (typeof string) === 'string';

const stringToArray = (string) => string.split(' ');

const capitalize = (string) => string.toUpperCase();

function abbreviateString(string) {
  if (!isString(string)) {
    throw new Error(`${string} is not a string`);
  }

  const stringArray = stringToArray(string.trim());
  const lastIndex = stringArray.length - 1;
  const firstWord = stringArray[0];
  const lastWord = stringArray[lastIndex];
  return `${firstWord} ${capitalize(lastWord[0])}.`;
}

export { abbreviateString };
