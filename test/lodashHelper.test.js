import { isEmpty } from '../src/helpers/lodashHelper.js';
import { assertEqual } from '../src/helpers/testHelper.js';

/**
 * Runs tests to verify the functionality of the isEmpty function.
 */
function runIsEmptyTests() {
  console.log("Running tests for isEmpty...");

  // Test cases
  assertEqual(isEmpty(null), true, "null should be empty");
  assertEqual(isEmpty(undefined), true, "undefined should be empty");
  assertEqual(isEmpty(false), false, "boolean false should not be empty");
  assertEqual(isEmpty(true), false, "boolean true should not be empty");
  assertEqual(isEmpty(0), false, "number 0 should not be empty");
  assertEqual(isEmpty(NaN), true, "NaN should be empty");
  assertEqual(isEmpty(''), true, "empty string should be empty");
  assertEqual(isEmpty('   '), true, "string with spaces should be empty");
  assertEqual(isEmpty('Hello'), false, "non-empty string should not be empty");
  assertEqual(isEmpty([]), true, "empty array should be empty");
  assertEqual(isEmpty([1, 2, 3]), false, "non-empty array should not be empty");
  assertEqual(isEmpty({}), true, "empty object should be empty");
  assertEqual(isEmpty({ a: 1 }), false, "non-empty object should not be empty");
  assertEqual(isEmpty(new Map()), true, "empty Map should be empty");
  assertEqual(isEmpty(new Set()), true, "empty Set should be empty");
  assertEqual(isEmpty(() => {}), false, "function should not be empty");

  console.log("All tests passed!");
}

runIsEmptyTests();
