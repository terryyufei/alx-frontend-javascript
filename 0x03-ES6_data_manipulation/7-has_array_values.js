export default function hasValuesFromArray(set, array) {
  const hasElements = array.every((value) => set.has(value));
  return hasElements;
}
