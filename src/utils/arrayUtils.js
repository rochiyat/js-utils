/**
 * Removes duplicates from an array.
 * @param {Array} array - The array to remove duplicates from.
 * @returns {Array} The array with duplicates removed.
 */
export function removeDuplicates(array) {
  return [...new Set(array)];
}

/**
 * Removes duplicates from an array of objects based on a key.
 * @param {Array} array - The array of objects to remove duplicates from.
 * @param {string} key - The key to remove duplicates by.
 * @returns {Array} The array with duplicates removed.
 */
export function removeDuplicatesFromObjectArray(array, key) {
  return [...new Map(array.map((item) => [item[key], item])).values()];
}

/**
 * Chunks an array into smaller arrays of a given size.
 * @param {Array} array - The array to chunk.
 * @param {number} chunkSize - The size of each chunk.
 * @returns {Array} An array of arrays, where each sub-array is a chunk of the original array.
 */
export function chunkArray(array, chunkSize) {
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
}

/**
 * Checks if an array is empty.
 * @param {Array} array - The array to check.
 * @returns {boolean} True if the array is empty, false otherwise.
 */
export function isArrayEmpty(array) {
  return Array.isArray(array) && array.length === 0;
}

/**
 * Checks if an array is not empty.
 * @param {Array} array - The array to check.
 * @returns {boolean} True if the array is not empty, false otherwise.
 */
export function isArrayNotEmpty(array) {
  return Array.isArray(array) && array.length > 0;
}

/**
 * Checks if two arrays are equal.
 * @param {Array} array1 - The first array to compare.
 * @param {Array} array2 - The second array to compare.
 * @returns {boolean} True if the arrays are equal, false otherwise.
 */
export function isArrayEqual(array1, array2) {
  return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
}

/**
 * Checks if two arrays are not equal.
 * @param {Array} array1 - The first array to compare.
 * @param {Array} array2 - The second array to compare.
 * @returns {boolean} True if the arrays are not equal, false otherwise.
 */
export function isArrayNotEqual(array1, array2) {
  return !isArrayEqual(array1, array2);
}

/**
 * Flattens a nested array.
 * @param {Array} array - The nested array to flatten.
 * @returns {Array} The flattened array.
 */
export function flattenArray(array) {
  return array.flat();
}

/**
 * Shuffles an array.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} The shuffled array.
 */
export function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

/**
 * Finds duplicates in an array.
 * @param {Array} array - The array to find duplicates in.
 * @returns {Array} The array with duplicates removed.
 */
export function findDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) !== index);
}

/**
 * Finds missing elements in two arrays.
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 * @returns {Array} The array with missing elements.
 */
export function findMissingElements(array1, array2) {
  return array1.filter((item) => !array2.includes(item));
}

/**
 * Groups an array of objects by a key.
 * @param {Array} array - The array of objects to group.
 * @param {string} key - The key to group by.
 * @returns {Object} An object where each key is a group and each value is an array of objects.
 */
export function groupBy(array, key) {
  return array.reduce((result, item) => {
    result[item[key]] = result[item[key]] || [];
    result[item[key]].push(item);
    return result;
  }, {});
}

/**
 * Sorts an array by a key.
 * @param {Array} array - The array to sort.
 * @param {string} key - The key to sort by.
 * @returns {Array} The sorted array.
 */
export function sortArray(array, key) {
  return array.sort((a, b) => a[key] - b[key]);
}

/**
 * Sorts an array by a string key.
 * @param {Array} array - The array to sort.
 * @param {string} key - The key to sort by.
 * @returns {Array} The sorted array.
 */
export function sortArrayByString(array, key) {
  return array.sort((a, b) => a[key].localeCompare(b[key]));
}

/**
 * Sorts an array by a date key.
 * @param {Array} array - The array to sort.
 * @param {string} key - The key to sort by.
 * @returns {Array} The sorted array.
 */
export function sortArrayByDate(array, key) {
  return array.sort((a, b) => new Date(a[key]) - new Date(b[key]));
}

/**
 * Finds the intersection of two arrays.
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 * @returns {Array} The array with the intersection.
 */
export function arrayIntersection(array1, array2) {
  return array1.filter((item) => array2.includes(item));
}

/**
 * Finds the unique elements of an array based on a key.
 * @param {Array} array - The array to find unique elements in.
 * @param {string} key - The key to find unique elements by.
 * @returns {Array} The array with unique elements.
 */
export function uniqueByKey(array, key) {
  return [...new Map(array.map((item) => [item[key], item])).values()];
}
