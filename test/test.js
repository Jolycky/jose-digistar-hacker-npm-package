// test/test.js

const assert = require('assert');
const areAnagrams = require('../lib/index');

// Helper function to log test results
function logTestResult(testDescription, expected, actual) {
    console.log(`${testDescription}`);
    console.log(`Diharapkan: ${expected}`);
    console.log(`Hasil: ${actual}`);
    console.log(`Hasil Tes: ${expected === actual ? 'PASS' : 'FAILED'}`);
    console.log('---------------------------');
}

// Test cases

// Positive test cases
let testDescription = "Test Case 1: 'satu' dan 'utas' harus menjadi anagram";
let expected = true;
let actual = areAnagrams('satu', 'utas');
logTestResult(testDescription, expected, actual);
assert.strictEqual(actual, expected);

testDescription = "Test Case 2: 'makan' dan 'kanma' harus menjadi anagram";
expected = true;
actual = areAnagrams('makan', 'kanma');
logTestResult(testDescription, expected, actual);
assert.strictEqual(actual, expected);

// Negative test cases
testDescription = "Test Case 3: 'pagi' dan 'siang' tidak boleh menjadi anagram";
expected = false;
actual = areAnagrams('pagi', 'siang');
logTestResult(testDescription, expected, actual);
assert.strictEqual(actual, expected);

testDescription = "Test Case 4: 'kucing' dan 'anjing' tidak boleh menjadi anagram";
expected = false;
actual = areAnagrams('kucing', 'anjing');
logTestResult(testDescription, expected, actual);
assert.strictEqual(actual, expected);

// Edge cases
testDescription = "Test Case 5: Karakter tunggal 'a' dan 'a' harus menjadi anagram";
expected = true;
actual = areAnagrams('a', 'a');
logTestResult(testDescription, expected, actual);
assert.strictEqual(actual, expected);

testDescription = "Test Case 6: String kosong '' dan '' harus menjadi anagram";
expected = true;
actual = areAnagrams('', '');
logTestResult(testDescription, expected, actual);
assert.strictEqual(actual, expected);

testDescription = "Test Case 7: Karakter tunggal 'a' dan 'b' tidak boleh menjadi anagram";
expected = false;
actual = areAnagrams('a', 'b');
logTestResult(testDescription, expected, actual);
assert.strictEqual(actual, expected);

console.log("Semua test case telah dijalankan.");
