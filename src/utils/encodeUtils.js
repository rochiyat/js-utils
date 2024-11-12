/**
 * Encodes a given UTF-8 string into Base64 format.
 *
 * @param {string} text - The UTF-8 string to be encoded.
 * @returns {string} The Base64 encoded string.
 */
export function encodeToBase64(text) {
  // Encode the UTF-8 string into Base64
  return btoa(unescape(encodeURIComponent(text)));
}

/**
 * Encodes an array of UTF-8 strings into Base64 format.
 *
 * @param {string[]} payload - An array of strings to be encoded.
 * @returns {string[]} An array of Base64 encoded strings.
 */
export function encodeToBase64Bulk(payload) {
  return payload.map((item) => {
    return encodeToBase64(item);
  });
}
