/**
 * Extracts the postal code from the given payload based on the source.
 * If the source is not 'website', it attempts to extract a default postal code
 * from the address string in the payload. Validates the postal code format
 * using a regular expression and overrides the postal code if necessary.
 *
 * @param {string} source - The source of the postal code information.
 * @param {Object} payload - The payload containing postal code and address data.
 * @param {string} payload.postalCode - The initial postal code from the payload.
 * @param {string} payload.address - The address string from which to extract the postal code.
 * @returns {string} - The validated postal code.
 */
export function extractPostalCodeAddressString(source, payload) {
  const regExpPostalCode = new RegExp(/^([1-9])[0-9]{4}$/);

  let { postalCode } = payload;
  if (String(source).toLowerCase() !== 'website') {
    // Get default postal code from address key
    let defaultPostalCode = payload.address.split(',');
    defaultPostalCode = defaultPostalCode[defaultPostalCode.length - 2];
    defaultPostalCode = defaultPostalCode.substr(defaultPostalCode.length - 5);

    // Override postal code when address string not contain valida postal code
    // eslint-disable-next-line max-len
    postalCode = regExpPostalCode.test(defaultPostalCode) ? defaultPostalCode : payload.postalCode;
  }

  return postalCode;
}

export function setCamelCase(payload) {
  
}

console.log(setCamelCase({
  'firstName': 'John',
  'lastName': 'Doe',
  'age': 30
}));