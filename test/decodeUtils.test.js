import { decodeFromBase64, decodeFromBase64Bulk } from '../src/utils/decodeUtils.js';
import { assertEqual, assertArrayEqual } from '../src/helpers/testHelper.js';

/**
 * Runs a test to verify the functionality of the decodeFromBase64 function.
 * It asserts that the Base64 encoded string 'YjE0OTg4MzYtOGYwNC00MzcxLWE3ODEtMjBhZDc4YWI1Njdh'
 * correctly decodes to 'b1498836-8f04-4371-a781-20ad78ab567a'.
 * Logs the result of the test with a pass or fail message.
 */
function runTest() {
  console.log("Running tests for decodeUtils...");
  
  assertEqual(decodeFromBase64('YjE0OTg4MzYtOGYwNC00MzcxLWE3ODEtMjBhZDc4YWI1Njdh'), 'b1498836-8f04-4371-a781-20ad78ab567a', 'Should decode from Base64');

  assertArrayEqual(decodeFromBase64Bulk(['YjE0OTg4MzYtOGYwNC00MzcxLWE3ODEtMjBhZDc4YWI1Njdh', 'YjE0OTg4MzYtOGYwNC00MzcxLWE3ODEtMjBhZDc4YWI1Njdi']), ['b1498836-8f04-4371-a781-20ad78ab567a', 'b1498836-8f04-4371-a781-20ad78ab567b'], 'Should decode bulk from Base64');
  
  console.log("All tests passed!");
}

runTest();
