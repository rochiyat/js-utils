/**
 * Check if a value is empty.
 * @param {any} value - The value to check.
 * @returns {boolean} Returns `true` if value is empty, else `false`.
 */
export function isEmpty(value) {
  // Check for null or undefined
  if (value == null) return true;

  // Check for boolean type
  if (typeof value === 'boolean') return false;

  // Check for number type (NaN is considered empty)
  if (typeof value === 'number') return isNaN(value);

  // Check for string type
  if (typeof value === 'string') return value.trim().length === 0;

  // Check for arrays and arguments object
  if (Array.isArray(value) || Object.prototype.toString.call(value) === '[object Arguments]') {
    return value.length === 0;
  }

  // Check for Map and Set
  if (value instanceof Map || value instanceof Set) return value.size === 0;

  // Check for plain objects
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  // For other types (like functions), consider as not empty
  return false;
}

/**
 * Convert a string to camelCase.
 * @param {string} str - The input string.
 * @returns {string} - The camelCase formatted string.
 */
export function setCamelCase(str) {
  return str
    .toLowerCase() // Ubah semua karakter menjadi huruf kecil
    .replace(/[-_ ]+(\w)/g, (_, char) => char.toUpperCase()) // Ubah huruf setelah -, _, atau spasi menjadi huruf besar
    .replace(/[^a-zA-Z0-9]/g, ''); // Hapus karakter non-alfanumerik
}

/**
 * Converts a given string from camelCase to snake_case.
 *
 * @param {string} str - The camelCase string to be converted.
 * @returns {string} - The converted snake_case string.
 */
export function setSnakeCase(str) {
  return str
    // changes capital letter to underscore followed by lowercase letter
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    // separates with underscore on non-alphanumeric (space, punctuation, etc.)
    .replace(/[\s\-]+/g, '_')
    // changes to lowercase
    .toLowerCase();
}
