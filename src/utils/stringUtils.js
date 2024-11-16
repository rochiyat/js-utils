/**
 * Checks if a value is a string.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a string, false otherwise.
 */
export function isString(value) {
  return typeof value === 'string';
}

/**
 * Checks if a value is not a string.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is not a string, false otherwise.
 */
export function isNotString(value) {
  return !isString(value);
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The string with the first letter capitalized.
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Checks if a string is not empty.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not empty, false otherwise.
 */
export function isNotEmptyString(str) {
  return isString(str) && str.length > 0;
}

/**
 * Checks if a string is empty.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is empty, false otherwise.
 */
export function isEmptyString(str) {
  return isString(str) && str.length === 0;
}

/**
 * Converts a string to kebab case.
 * @param {string} str - The string to convert.
 * @returns {string} The string in kebab case.
 */
export function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Converts a string to snake case.
 * @param {string} str - The string to convert.
 * @returns {string} The string in snake case.
 */
export function toSnakeCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

/**
 * Converts a string to title case.
 * @param {string} str - The string to convert.
 * @returns {string} The string in title case.
 */
export function toTitleCase(str) {
  return str.replace(/\b\w+/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

/**
 * Converts a string to camel case.
 * @param {string} str - The string to convert.
 * @returns {string} The string in camel case.
 */
export function toCamelCase(str) {
  return str.replace(/-|_/g, ' ').replace(/\b\w/g, (txt) => txt.toUpperCase());
}

/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
export function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str) {
  return str === reverseString(str);
}

/**
 * Removes whitespace from a string.
 * @param {string} str - The string to remove whitespace from.
 * @returns {string} The string with whitespace removed.
 */
export function removeWhitespace(str) {
  return str.replace(/\s+/g, '');
}

/**
 * Removes special characters from a string.
 * @param {string} str - The string to remove special characters from.
 * @returns {string} The string with special characters removed.
 */
export function removeSpecialCharacters(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}

/**
 * Truncates a string to a given maximum length.
 * @param {string} str - The string to truncate.
 * @param {number} maxLength - The maximum length of the string.
 * @returns {string} The truncated string.
 */
export function truncateString(str, maxLength) {
  return str.length > maxLength ? str.substring(0, maxLength) : str;
}

/**
 * Counts the occurrences of a substring in a string.
 * @param {string} str - The string to count occurrences in.
 * @param {string} searchValue - The substring to count occurrences of.
 * @returns {number} The number of occurrences of the substring.
 */
export function countOccurrences(str, searchValue) {
  return str.split(searchValue).length - 1;
}

/**
 * Generates a random string of a given length.
 * @param {number} length - The length of the random string.
 * @returns {string} The random string.
 */
export function randomString(length) {
  return Math.random().toString(36).substring(2, length + 2);
}

/**
 * Repeats a string a given number of times.
 * @param {string} str - The string to repeat.
 * @param {number} times - The number of times to repeat the string.
 * @returns {string} The repeated string.
 */
export function repeatString(str, times) {
  return str.repeat(times);
}

/**
 * Converts a string to a slug.
 * @param {string} str - The string to convert to a slug.
 * @returns {string} The slug.
 */
export function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
