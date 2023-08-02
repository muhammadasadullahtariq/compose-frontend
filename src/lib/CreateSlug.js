export function removeSpacesFromString(inputString) {
  // Use the replace method with a regular expression to match all spaces globally
  const resultString = inputString.replace(/\s/g, "-");
  return resultString;
}

export function addSpacesToString(inputString) {
  const resultString = inputString.replace(/-/g, " ");
  return resultString;
}
