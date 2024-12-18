import { isEmpty, setCamelCase, setSnakeCase, setKebabCase, setTitleCase } from '../src/helpers/lodashHelper.js';
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

  // Test cases for setKebabCase
  console.log("Running tests for setKebabCase...");
  assertEqual(setKebabCase('helloWorld'), 'hello-world', "Should convert 'helloWorld' to 'hello-world'");
  assertEqual(setKebabCase('setCamelCase'), 'set-camel-case', "Should convert 'setCamelCase' to 'set-camel-case'");
  assertEqual(setKebabCase('Make 123 camel-case'), 'make-123-camel-case', "Should convert 'Make 123 camel-case' to 'make-123-camel-case'");
  assertEqual(setKebabCase('FOO_bar-baz'), 'foo-bar-baz', "Should convert 'FOO_bar-baz' to 'foo-bar-baz'");

  // Test cases for setTitleCase
  console.log("Running tests for setTitleCase...");
  assertEqual(setTitleCase('hello world'), 'Hello World', "Should convert 'hello world' to 'Hello World'");
  assertEqual(setTitleCase('this is a test'), 'This Is A Test', "Should convert 'this is a test' to 'This Is A Test'");
  assertEqual(setTitleCase('Make 123 camel-case'), 'Make 123 Camel-Case', "Should convert 'Make 123 camel-case' to 'Make 123 Camel-Case'");

  console.log("All tests passed!");
}

runIsEmptyTests();
