
export function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`✅ ${testName} passed`);
  } else {
    console.error(`❌ ${testName} failed`);
    console.error(`   Expected: ${expected}, but got: ${actual}`);
  }
}
