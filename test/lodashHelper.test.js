import { isEmpty, setCamelCase, setSnakeCase } from '../src/helpers/lodashHelper.js';
import { assertEqual } from '../src/helpers/testHelper.js';

/**
 * Runs tests to verify the functionality of the isEmpty function.
 */
function runIsEmptyTests() {
  console.log("Running tests for isEmpty...");

  // Test cases for isEmpty
  console.log("Running tests for isEmpty...");
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

  // Test cases for setCamelCase
  console.log("Running tests for setCamelCase...");
  assertEqual(setCamelCase('hello world'), 'helloWorld', "Should convert 'hello world' to 'helloWorld'");
  assertEqual(setCamelCase('set-camel-case'), 'setCamelCase', "Should convert 'set-camel-case' to 'setCamelCase'");
  assertEqual(setCamelCase('this_is_a_test'), 'thisIsATest', "Should convert 'this_is_a_test' to 'thisIsATest'");
  assertEqual(setCamelCase('Make 123 camel-case'), 'make123CamelCase', "Should convert 'Make 123 camel-case' to 'make123CamelCase'");
  assertEqual(setCamelCase('FOO_bar-baz'), 'fooBarBaz', "Should convert 'FOO_bar-baz' to 'fooBarBaz'");

  // Test cases for setSnakeCase
  console.log("Running tests for setSnakeCase...");
  assertEqual(setSnakeCase('helloWorld'), 'hello_world', "Should convert 'helloWorld' to 'hello_world'");
  assertEqual(setSnakeCase('setCamelCase'), 'set_camel_case', "Should convert 'setCamelCase' to 'set_camel_case'");
  assertEqual(setSnakeCase('Make 123 camel-case'), 'make_123_camel_case', "Should convert 'Make 123 camel-case' to 'make_123_camel_case'");
  assertEqual(setSnakeCase('FOO_bar-baz'), 'foo_bar_baz', "Should convert 'FOO_bar-baz' to 'foo_bar_baz'");

  console.log("All tests passed!");
}

runIsEmptyTests();
