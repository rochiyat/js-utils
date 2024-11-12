/**
 * Compares the actual and expected values and logs the result of the test.
 *
 * @param {*} actual - The actual value obtained from the test.
 * @param {*} expected - The expected value to compare against.
 * @param {string} testName - The name of the test being executed.
 */
export function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`✅ ${testName} passed`);
  } else {
    console.error(`❌ ${testName} failed`);
    console.error(`   Expected: ${expected}, but got: ${actual}`);
  }
}

/**
 * Compares two arrays for equality by converting them to JSON strings
 * and uses the assertEqual function to log the test result.
 *
 * @param {Array} actual - The actual array to be tested.
 * @param {Array} expected - The expected array to compare against.
 * @param {string} testName - The name of the test case.
 */
export function assertArrayEqual(actual, expected, testName) {
  assertEqual(JSON.stringify(actual), JSON.stringify(expected), testName);
}
