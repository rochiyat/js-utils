import { encodeToBase64, encodeToBase64Bulk } from '../src/utils/encodeUtils.js';
import { assertEqual, assertArrayEqual } from '../src/helpers/test.helper.js';

/**
 * Executes a series of tests for the encodeUtils module.
 * 
 * This function tests the encoding of a single string and an array of strings
 * to Base64 format using the `encodeToBase64` and `encodeToBase64Bulk` functions.
 * It utilizes `assertEqual` and `assertArrayEqual` to verify the correctness
 * of the encoding process and logs the results to the console.
 */
function runTest() {
  console.log("Running tests for encodeUtils...");

  assertEqual(
    encodeToBase64('b1498836-8f04-4371-a781-20ad78ab567a'),
    'YjE0OTg4MzYtOGYwNC00MzcxLWE3ODEtMjBhZDc4YWI1Njdh',
    'Should encode to Base64'
  );

  assertArrayEqual(
    encodeToBase64Bulk(['b1498836-8f04-4371-a781-20ad78ab567a', 'b1498836-8f04-4371-a781-20ad78ab567b']),
    ['YjE0OTg4MzYtOGYwNC00MzcxLWE3ODEtMjBhZDc4YWI1Njdh', 'YjE0OTg4MzYtOGYwNC00MzcxLWE3ODEtMjBhZDc4YWI1Njdi'],
    'Should encode bulk to Base64'
  );

  console.log("All tests passed!");
}

runTest();
