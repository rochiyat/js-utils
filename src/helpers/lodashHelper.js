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
