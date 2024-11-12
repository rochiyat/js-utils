import CryptoJS from 'crypto-js';

/**
 * Converts a string to Base64 format.
 * @param {string} text - The string to be converted to Base64.
 * @returns {string} The Base64 representation of the input string.
 */
export function convertToBase64Single(text) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
}

/**
 * Converts an object to Base64 format.
 * @param {object} payload - The object to be converted to Base64.
 * @returns {string} The Base64 representation of the input object.
 */
export function convertToBase64Bulk(payload) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(payload)));
}
