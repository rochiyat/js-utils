/**
 * Decodes a Base64 encoded string.
 *
 * @param {string} text - The Base64 encoded string to decode.
 * @returns {string} The decoded string.
 */
export function decodeFromBase64(text) {
  return atob(text);
}

/**
 * Decodes an array of Base64 encoded strings.
 *
 * @param {string[]} payload - An array of Base64 encoded strings to decode.
 * @returns {string[]} An array of decoded strings.
 */
export function decodeFromBase64Bulk(payload) {
  return payload.map((item) => decodeFromBase64(item));
}
